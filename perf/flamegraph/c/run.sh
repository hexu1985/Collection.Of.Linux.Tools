
#perf report -n --stdio

mkdir -p perf_result
mkdir -p perf_fold
mkdir -p perf_svg

data_file="perf_result/perf.data"
fold_file="perf_fold/perf.fold"
svg_file="perf_svg/perf.svg"
perf record -F 99 -o "$data_file" -g ./sched 5000 100
perf script -i "$data_file" | ./stackcollapse-perf.pl > "$fold_file"
./flamegraph.pl "$fold_file" > "$svg_file"
