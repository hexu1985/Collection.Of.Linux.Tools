### hdparm 命令

通常情况下可以使用fdisk、df等命令查看硬盘的分区情况以及当前已使用空间大小、剩余空间大小等信息。但是如果要查看硬盘的硬件信息如 硬盘型号、序列号、已运行时间等信息该用什么工具查看呢？在Linux下我们可以借助以下命令来查看硬盘的硬件型号信息。

hdparm命令用来获取或设置SATA/IDE设备的参数。注意了，既可以获取也可以设置，所以使用这个命令的时候务必要小心。当然我们只是为了获取查看硬盘信息，故不会对硬盘及系统造成什么危害。通常会配合 -i 或 -I（大写的i） 选项来取得硬盘的硬件信息。用法如下：

```
$ sudo hdparm -I /dev/sda
```

我的笔记本上的输出信息如下：

```
/dev/sda:

ATA device, with non-removable media
	Model Number:       SanDisk Extreme Portable SSD            
	Serial Number:      2039A3802322        
	Firmware Revision:  415000RL
	Media Serial Num:   
	Media Manufacturer: 
	Transport:          Serial, ATA8-AST, SATA 1.0a, SATA II Extensions, SATA Rev 2.5, SATA Rev 2.6, SATA Rev 3.0
Standards:
	Used: unknown (minor revision code 0x005e) 
	Supported: 11 10 9 8 7 6 5 
	Likely used: 11
Configuration:
	Logical		max	current
	cylinders	16383	0
	heads		16	0
	sectors/track	63	0
	--
	LBA    user addressable sectors:   268435455
	LBA48  user addressable sectors:   976773168
	Logical  Sector size:                   512 bytes
	Physical Sector size:                   512 bytes
	Logical Sector-0 offset:                  0 bytes
	device size with M = 1024*1024:      476940 MBytes
	device size with M = 1000*1000:      500107 MBytes (500 GB)
	cache/buffer size  = unknown
	Form Factor: unknown (0x0007]
	Nominal Media Rotation Rate: Solid State Device
Capabilities:
	LBA, IORDY(can be disabled)
	Queue depth: 32
	Standby timer values: spec'd by Standard, no device specific minimum
	R/W multiple sector transfer: Max = 1	Current = 1
	Advanced power management level: 128
	DMA: mdma0 mdma1 mdma2 udma0 udma1 udma2 udma3 udma4 *udma5 udma6 
	     Cycle time: min=120ns recommended=120ns
	PIO: pio0 pio1 pio2 pio3 pio4 
	     Cycle time: no flow control=120ns  IORDY flow control=120ns
Commands/features:
	Enabled	Supported:
	   *	SMART feature set
	    	Security Mode feature set
	   *	Power Management feature set
	   *	Write cache
	   *	Look-ahead
	   *	WRITE_BUFFER command
	   *	READ_BUFFER command
	   *	DOWNLOAD_MICROCODE
	   *	Advanced Power Management feature set
	   *	48-bit Address feature set
	   *	Mandatory FLUSH_CACHE
	   *	FLUSH_CACHE_EXT
	   *	SMART error logging
	   *	SMART self-test
	   *	General Purpose Logging feature set
	   *	64-bit World wide name
	   *	WRITE_UNCORRECTABLE_EXT command
	   *	{READ,WRITE}_DMA_EXT_GPL commands
	   *	Segmented DOWNLOAD_MICROCODE
	    	unknown 119[8]
	   *	Gen1 signaling speed (1.5Gb/s)
	   *	Gen2 signaling speed (3.0Gb/s)
	   *	Gen3 signaling speed (6.0Gb/s)
	   *	Native Command Queueing (NCQ)
	   *	Phy event counters
	   *	READ_LOG_DMA_EXT equivalent to READ_LOG_EXT
	    	DMA Setup Auto-Activate optimization
	    	Device-initiated interface power management
	    	Asynchronous notification (eg. media change)
	    	Software settings preservation
	   *	Device Sleep (DEVSLP)
	   *	SANITIZE feature set
	   *	BLOCK_ERASE_EXT command
	   *	DOWNLOAD MICROCODE DMA command
	   *	WRITE BUFFER DMA command
	   *	READ BUFFER DMA command
	   *	Data Set Management TRIM supported (limit 8 blocks)
	   *	Deterministic read ZEROs after TRIM
Security: 
	Master password revision code = 65534
		supported
	not	enabled
	not	locked
	not	frozen
	not	expired: security count
		supported: enhanced erase
	2min for SECURITY ERASE UNIT. 2min for ENHANCED SECURITY ERASE UNIT.
Logical Unit WWN Device Identifier: 5001b448bbc61f38
	NAA		: 5
	IEEE OUI	: 001b44
	Unique ID	: 8bbc61f38
Device Sleep:
	DEVSLP Exit Timeout (DETO): 30 ms (drive)
	Minimum DEVSLP Assertion Time (MDAT): 30 ms (drive)
Checksum: correct
``` 

从上面的输出信息可以看出我的笔记本上的硬盘是一块西部数据硬盘
