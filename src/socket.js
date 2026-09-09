"use client";

import { io } from "socket.io-client";

export const socket = io("http://192.168.100.114:3000");