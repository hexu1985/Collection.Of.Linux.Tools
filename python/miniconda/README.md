# Miniconda 安装指南

## 一、安装步骤

### Windows
1. **下载安装包**：
   - 双击运行 `.exe` 文件

2. **安装过程**：
   - 点击 Next → 同意协议 → Next
   - **重要**：选择"Just Me"（推荐）或"All Users"
   - 选择安装路径（建议：`C:\miniconda3`）
   - **重要**：勾选 ✅ "Add Miniconda3 to my PATH environment variable"
   - 勾选 ✅ "Register Miniconda3 as my default Python 3.x"
   - 点击 Install → Finish

3. **验证安装**：
   ```bash
   # 打开命令提示符或Anaconda Prompt
   conda --version
   ```

### macOS/Linux
```bash
# 1. 下载安装脚本
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

# 2. 运行安装脚本
bash Miniconda3-latest-Linux-x86_64.sh

# 3. 按提示操作
# - 按Enter阅读协议
# - 输入 yes 同意协议
# - 按Enter确认安装路径（默认：~/miniconda3）
# - 输入 yes 初始化conda

# 4. 激活conda
source ~/.bashrc  # 或 source ~/.zshrc
```

## 二、常用命令大全

### 1. 环境管理
```bash
# 查看所有环境
conda env list
conda info --envs

# 创建新环境（指定Python版本）
conda create --name myenv python=3.9

# 创建环境并安装包
conda create --name myenv python=3.9 numpy pandas

# 激活环境
conda activate myenv        # Windows/macOS/Linux
source activate myenv       # Linux/macOS旧版本

# 退出当前环境
conda deactivate

# 复制环境
conda create --name newenv --clone oldenv

# 删除环境
conda remove --name myenv --all
```

### 2. 包管理
```bash
# 查看已安装包
conda list
conda list --name myenv    # 查看指定环境的包

# 安装包
conda install numpy
conda install numpy=1.21   # 指定版本
conda install numpy pandas matplotlib  # 一次安装多个

# 安装特定渠道的包
conda install -c conda-forge package_name

# 更新包
conda update numpy
conda update --all         # 更新所有包

# 卸载包
conda remove numpy

# 搜索包
conda search numpy
conda search "numpy>=1.20" # 带版本条件
```

### 3. 渠道管理
```bash
# 查看当前渠道
conda config --show channels

# 添加渠道（如清华源）
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/

# 设置搜索时显示渠道URL
conda config --set show_channel_urls yes

# 删除渠道
conda config --remove channels channel_name
```

### 4. 环境导出与导入
```bash
# 导出环境到YAML文件
conda env export > environment.yml
conda env export --name myenv > myenv.yml

# 从YAML文件创建环境
conda env create -f environment.yml

# 导出精确的环境配置（仅包含明确安装的包）
conda env export --from-history > env_simple.yml

# 更新现有环境
conda env update -f environment.yml
```

### 5. 系统信息与清理
```bash
# 查看conda信息
conda info
conda config --show

# 查看Python版本
python --version

# 清理缓存
conda clean --all          # 清理所有
conda clean --packages     # 清理包缓存
conda clean --tarballs     # 清理tarballs

# 验证conda安装
conda doctor
```

### 6. 实用命令组合
```bash
# 1. 创建项目环境的完整流程
conda create --name project_env python=3.10
conda activate project_env
conda install numpy pandas matplotlib jupyter
conda env export > project_env.yml

# 2. 备份和迁移环境
conda env export --name old_env > backup.yml
conda env create --name new_env --file backup.yml

# 3. 安装开发工具包
conda install -c conda-forge jupyterlab black flake8 pylint

# 4. 创建R环境
conda create --name r_env r-essentials r-base
```

## 三、常用配置

### 配置文件位置
```bash
# Windows: C:\Users\<用户名>\.condarc
# Linux/macOS: ~/.condarc
```

### 示例 `.condarc` 配置（使用国内镜像）
```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
ssl_verify: true
```

## 四、快捷技巧

### 1. Tab补全
```bash
# 环境名、包名支持Tab补全
conda activate my[Tab]
conda install num[Tab]
```

### 2. 命令别名（Linux/macOS）
```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
alias ca='conda activate'
alias cda='conda deactivate'
alias cel='conda env list'
alias cl='conda list'
alias ci='conda install'
```

### 3. 常见问题解决
```bash
# 1. 环境激活失败
conda init  # 重新初始化

# 2. 包冲突解决
conda install --channel defaults package_name --override-channels

# 3. 重置conda配置
conda config --remove-key channels
```

## 五、最佳实践

1. **每个项目一个独立环境**
2. **使用environment.yml共享环境配置**
3. **定期清理缓存：** `conda clean --all`
4. **优先使用conda-forge渠道**（包更新更快）
5. **混合使用conda和pip时，先conda后pip**

## 六、Mamba（更快替代）
```bash
# 安装mamba（在base环境）
conda install -n base -c conda-forge mamba

# 使用mamba（命令与conda相同，但更快）
mamba create --name fast_env python=3.10
mamba install numpy pandas
```

掌握了这些命令，你就能高效使用Miniconda管理Python环境了！


If you'd prefer that conda's base environment not be activated on startup,
   run the following command when conda is activated:

conda config --set auto_activate_base false

Note: You can undo this later by running `conda init --reverse $SHELL`

Proceed with initialization? [yes|no]