在 Ubuntu 系统上搭建 JFrog (Artifactory) 是完全可以的，而且有多种方式可以实现。

JFrog Artifactory 是一个强大的制品仓库管理工具，主要有几个版本：**社区版（C++ CE）**、**开源版（OSS）** 和功能更全的**企业版（Pro / Enterprise）**。你可以根据自己的需求，选择以下两种主流方式来安装：

### 🛠️ 方法一：通过 APT 仓库安装（推荐新手）

这种方法最直接，通过官方的 APT 源，像安装普通软件一样安装，方便日后更新。

1.  **安装依赖环境**：JFrog 是 Java 应用，需要先安装 Java 运行时环境（JRE）。
    ```bash
    sudo apt update
    sudo apt install fontconfig openjdk-17-jre -y
    ```
    你可以用 `java --version` 命令验证 Java 是否安装成功。

2.  **添加 JFrog 官方仓库**：需要先添加 JFrog 的 GPG 密钥，并将官方仓库添加到你的软件源列表中。
    ```bash
    # 下载并添加 JFrog 公钥
    wget -qO - https://releases.jfrog.io/artifactory/api/gpg/key/public | sudo apt-key add -

    # 获取你的 Ubuntu 版本代号 (例如 jammy, focal)
    DISTRO=$(lsb_release -cs)

    # 添加 JFrog Artifactory 仓库
    echo "deb https://releases.jfrog.io/artifactory/artifactory-debs ${DISTRO} main" | sudo tee -a /etc/apt/sources.list
    ```
    > **注意**：部分较旧的教程可能使用 `bionic` 或 `xenial` 等固定代号，为了兼容性，建议使用命令动态获取你的系统代号 `${DISTRO}`。

3.  **安装 JFrog Artifactory**：更新源并安装。你可以选择安装社区版（`jfrog-artifactory-cpp-ce`）或开源版（`jfrog-artifactory-oss`）。
    ```bash
    sudo apt-get update
    # 以下安装社区版，若需开源版可将包名替换为 jfrog-artifactory-oss
    sudo apt-get install jfrog-artifactory-cpp-ce -y
    ```

4.  **启动服务**：安装完成后，启动 Artifactory 服务并设置开机自启。
    ```bash
    sudo systemctl start artifactory.service
    sudo systemctl enable artifactory.service
    ```

### 🐳 方法二：通过 Docker 安装（快速隔离）

如果你更习惯容器化环境，或者想避免污染系统环境，Docker 是最快捷的选择。

1.  **安装 Docker**：确保你的系统已安装 Docker 和 Docker Compose。
2.  **拉取并运行容器**：根据你的版本选择对应的镜像，直接运行即可。以下命令会映射端口并挂载数据卷。
    ```bash
    # 创建一个目录存放数据
    JFROG_HOME=~/jfrog
    mkdir -p $JFROG_HOME/artifactory/var/etc/
    touch $JFROG_HOME/artifactory/var/etc/system.yaml
    chown -R 1030:1030 $JFROG_HOME/artifactory/var

    # 运行 Artifactory 开源版 (OSS) 容器
    docker run --name artifactory \
               -v $JFROG_HOME/artifactory/var/:/var/opt/jfrog/artifactory \
               -d -p 8081:8081 -p 8082:8082 \
               releases-docker.jfrog.io/jfrog/artifactory-oss:latest
    ```

### 🌐 访问与初始化

无论用哪种方法安装，安装成功后，你都可以通过浏览器访问 JFrog 的 Web 界面进行初始化配置。

*   **访问地址**：`http://<你的服务器IP>:8082/ui/` (部分版本可能是 8081 端口)。
*   **默认用户名/密码**：`admin` / `password`。

### ⚙️ 重要准备与注意事项

在动手之前，有几点需要留意：

1.  **硬件配置**：JFrog 对资源有一定要求。官方建议最低配置是 **4核CPU、8GB内存**，如果数据量大，存储建议使用高速磁盘。测试环境可以适当降低。
2.  **数据库配置**：JFrog 默认可能使用内置数据库，但生产环境强烈建议配置外部数据库（如 MariaDB/PostgreSQL），以保证数据安全。
3.  **端口开放**：确保服务器的防火墙（如 `ufw`）或云服务商的安全组放行了 **8081** 和 **8082** 端口。

你是打算在个人学习环境中试用，还是部署到服务器上长期使用呢？如果是前者，推荐 Docker 方式，干净利落；如果是后者，APT 方式更适合后续维护。告诉我你的具体用途，我再帮你做更具体的推荐。
