nohup ./sched 20000 200 &
sched_pid=$!

mkdir -p perf_result
mkdir -p perf_fold
mkdir -p perf_svg

data_file="perf_result/perf.data"
fold_file="perf_fold/perf.fold"
svg_file="perf_svg/perf.svg"
perf record -F 99 -p ${sched_pid} -o "$data_file" -g -- sleep 10
perf script -i "$data_file" | ./stackcollapse-perf.pl > "$fold_file"
./flamegraph.pl "$fold_file" > "$svg_file"
