import snap7
from snap7.util import *
import time

# Linea 26

plc = snap7.client.Client()
plc.connect('10.31.35.29',0,1)

if plc == None:
    print('PLC Connection Failed')
    lstatus = "Disconected"
    exit()

else :
    print('PLC Connected')
    lstatus = "Connected"

    while True:
        time.sleep(0.5)
        
        print(lstatus)

        flow1= plc.mb_read(54,4)
        flow1 = get_real(flow1,0)
        print(flow1, "l/min")

        ppms1= plc.mb_read(64,4)
        ppms1 = get_real(ppms1,0)
        print (ppms1, "ppms")

        


