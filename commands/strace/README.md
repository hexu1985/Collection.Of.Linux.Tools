
性能之巅8.6.3
```
$ sudo strace -ttT -p 16002
strace: Process 16002 attached
16:33:56.553601 recvfrom(3, "The time is 2023-02-15 16:34:14", 65535, 0, {sa_family=AF_UNIX, sun_path="/tmp/cxx_unix_socket_client.16027"}, [110->36]) = 31 <17.462130>
16:34:14.016080 write(1, "The client at /tmp/cxx_unix_sock"..., 85) = 85 <0.000147>
16:34:14.016351 brk(0x5650d833a000)     = 0x5650d833a000 <0.000031>
16:34:14.016428 sendto(3, "Your data was 31 bytes long", 27, 0, {sa_family=AF_UNIX, sun_path="/tmp/cxx_unix_socket_client.16027"}, 36) = 27 <0.000031>
16:34:14.016515 recvfrom(3, "The time is 2023-02-15 16:34:24", 65535, 0, {sa_family=AF_UNIX, sun_path="/tmp/cxx_unix_socket_client.16028"}, [110->36]) = 31 <10.243010>
16:34:24.259761 write(1, "The client at /tmp/cxx_unix_sock"..., 85) = 85 <0.000096>
16:34:24.260073 sendto(3, "Your data was 31 bytes long", 27, 0, {sa_family=AF_UNIX, sun_path="/tmp/cxx_unix_socket_client.16028"}, 36) = 27 <0.000172>
```
