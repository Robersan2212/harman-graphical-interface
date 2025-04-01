from tkinter import ttk
from tkinter import *

import time 
import snap7
from snap7.util import *

IP = '10.31.35.15'
RACK = 0
SLOT = 1

Vflow = 54
Vppms = 64
BITS = 4

timemax = 10 
start_time = time.time()

plc = snap7.client.Client()
plc.connect(IP, RACK, SLOT)

while True:
    time.sleep(0.5)
    try:
        statusL = plc.get_cpu_state()
        match statusL:
                case "S7CpuStatusRun":
                    print ("RUN")
                    
                    flow1= plc.mb_read(54,4)
                    flow1 = get_real(flow1,0)
                    print(flow1, "l/min")

                    ppms1= plc.mb_read(64,4)
                    ppms1 = get_real(ppms1,0)
                    print (ppms1, "ppms")

                case "S7CpuStatusStop":
                    print ("STOP")
                    break
                case "S7CpuStatusERROR":
                    print ("ERROR")
                    break
    except RuntimeError as e:
         print ("PLC Connection Failed")




                        


             

