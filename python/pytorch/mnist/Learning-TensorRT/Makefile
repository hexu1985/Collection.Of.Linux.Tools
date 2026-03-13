CXX = g++
CXXFLAGS = -g3 -Wall -Wextra
LDFLAGS = 
LDLIBS = 

PROGS =	onnx_eval

.PHONY: all
all: $(PROGS)
	@echo "build OK!"

clean:
	@$(RM) $(PROGS) *.o
	@echo "clean OK!"

onnx_eval: onnx_eval.o
	$(CXX) -o $@ $^ $(LDFLAGS) $(LDLIBS)

