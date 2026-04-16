在 Ubuntu 上安装 Docker 有几种主流方法。最推荐的是使用 Docker 官方 APT 仓库安装 Docker Engine，它稳定、安全且便于后续更新。

下面是以 Ubuntu 24.04 LTS 为例的安装步骤，同样适用于 Ubuntu 22.04 和 20.04 等 LTS 版本。安装前，请确保你的用户账户有 `sudo` 权限。

### ⚙️ 第一步：环境准备
在安装前，先更新软件包列表，并安装一些必要的依赖工具，这些工具将允许 `apt` 通过 HTTPS 使用新的仓库。
```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release
```
如果想彻底清理系统，可以先卸载可能存在的旧版本 Docker 软件包，以避免冲突。

### 🗝️ 第二步：添加 Docker 官方仓库
这是最关键的一步，它能确保你从 Docker 官方源安装，而非 Ubuntu 自带的可能较旧的版本。

1. **添加 Docker 官方 GPG 密钥**：Docker 使用 GPG 密钥对软件包进行签名，以验证其真实性。我们将密钥下载并存储在一个安全的位置。
    ```bash
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    ```
    此命令将下载 Docker 的 GPG 密钥并将其添加到系统的密钥环中。
    如果下载官方密钥困难，可以替换为国内的阿里云镜像源，效果是相同的。

2. **设置 Docker 稳定版仓库**：将 Docker 的官方 APT 仓库添加到系统的软件源列表中，这样 `apt` 命令才能找到并安装 Docker 包。
    ```bash
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    这个命令会自动检测你的系统架构（如 `amd64`）和 Ubuntu 版本代号（如 `noble`），并写入正确的仓库地址。

### 📦 第三步：安装 Docker Engine
仓库配置好后，就可以更新包索引并安装 Docker 的核心组件了。

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
这个命令会安装 Docker 引擎（`docker-ce`）、命令行工具（`docker-ce-cli`）、容器运行时（`containerd.io`）以及 Buildx 和 Compose 插件。

### ✅ 第四步：验证与后续配置
安装完成后，进行验证和必要的配置。

1. **验证安装**：运行经典的 `hello-world` 容器。如果安装成功，你会看到一条欢迎信息。
    ```bash
    sudo docker run hello-world
    ```
    这条命令会下载测试镜像并在容器中运行，若输出成功提示，即表示 Docker 已正常工作。

2. **避免每次输入 `sudo` (推荐)**：默认情况下，运行 `docker` 命令需要 `sudo` 权限。将你的用户加入 `docker` 用户组，就可以免去这个步骤。
    ```bash
    sudo usermod -aG docker $USER
    ```
    **重要**：执行此命令后，需要注销当前用户并重新登录（或重启系统），新的组权限才会生效。之后，你就可以直接运行 `docker ps` 等命令了。

3. **设置开机自启 (可选)**：如果希望 Docker 服务在系统启动时自动运行，可以执行：
    ```bash
    sudo systemctl enable docker && sudo systemctl start docker
    ```
    这可以确保你的 Docker 容器在服务器重启后能够自动恢复。


---

### 🚀 配置国内镜像加速器（推荐）

从国内直接访问 Docker Hub 很容易超时或被限制，最有效的解决方法是配置国内镜像加速器。

```
sudo docker run --rm hello-world
Unable to find image 'hello-world:latest' locally
docker: Error response from daemon: failed to resolve reference "docker.io/library/hello-world:latest": failed to do request: Head "https://registry-1.docker.io/v2/library/hello-world/manifests/latest": dial tcp 210.56.51.192:443: connect: connection refused

Run 'docker run --help' for more information
```

#### 1. 创建配置文件

```bash
sudo mkdir -p /etc/docker
```

#### 2. 写入加速器配置

根据你所在的云服务商或网络环境选择合适的镜像源：

| 镜像源 | 地址 | 说明 |
|--------|------|------|
| 轩辕镜像（推荐） | `https://docker.xuanyuan.me` | 国内专线，免费无需登录 |
| 中科大镜像 | `https://docker.mirrors.ustc.edu.cn` | 无需注册 |
| 阿里云镜像 | `https://<你的ID>.mirror.aliyuncs.com` | 需登录容器镜像服务控制台获取 |
| 网易镜像 | `http://hub-mirror.c.163.com` | 多节点覆盖 |
| Docker中国官方镜像 | `https://registry.docker-cn.com` | 官方认证 |

**配置文件示例**（可同时配置多个，Docker 会自动选择可用的）：

```bash
sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": [
    "https://docker.xuanyuan.me",
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ]
}
EOF
```

#### 3. 重启 Docker 服务

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### 4. 验证配置是否生效

```bash
docker info | grep -A 3 "Registry Mirrors"
```

输出中应该能看到你配置的镜像加速器地址。

