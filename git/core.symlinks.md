# 解决 Git 仓库中软链接在 Windows 和 Linux 之间传输的问题

当你在 Windows 上克隆包含 Linux 软链接的 Git 仓库，然后打包传输到 Linux 系统时，确实会遇到软链接失效的问题。这是因为：

1. Windows 的 Git 实现默认不会创建真正的符号链接
2. Windows 和 Linux 对符号链接的处理方式不同

## 解决方案

### 1. 在 Windows 克隆时启用符号链接

在 Windows 上克隆仓库时，可以启用符号链接支持：

```bash
git clone -c core.symlinks=true <repository-url>
```

或者克隆后配置：

```bash
git config core.symlinks true
```

**注意**：这需要：
- 以管理员身份运行 Git Bash（因为创建符号链接需要特权）
- 文件系统是 NTFS
- 开发者模式已启用（Windows 10/11）

