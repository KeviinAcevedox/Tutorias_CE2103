cmake_minimum_required(VERSION 3.20)
project(Cliente)

set(CMAKE_CXX_STANDARD 14)
SET(CMAKE_CXX_FLAGS -pthread)
add_executable(Cliente main.cpp SocketCliente.cpp SocketCliente.h)
