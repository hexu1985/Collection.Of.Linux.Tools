// example.cpp
#include <vector>
#include <iostream>

namespace Math {
    class Calculator {
    public:
        double compute(std::vector<int>& data) {
            double sum = 0;
            for (int x : data) {
                sum += process(x);
            }
            return sum / data.size();
        }
        
    private:
        double process(int value) {
            return value * 1.5;
        }
    };
}

int main() {
    Math::Calculator calc;
    std::vector<int> data = {1, 2, 3, 4, 5};
    
    double sum = 0;
    while (true) {
        double result = calc.compute(data);
        sum += result;
    }

    (void) sum;
    return 0;
}
