#include <iostream>
#include <thread>
#include <chrono>

int main() {
    while (true) {
        std::cout << "wait any key" << std::endl;
        char c;
        std::cin >> c;
        std::cout << "you entry an " << (char) c << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(3));
    }
}
