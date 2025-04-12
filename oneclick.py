import time
import pyautogui

def keep_awake(interval=1):
    while True:
        pyautogui.moveRel(1, 0)  # Mueve el cursor 1 píxel a la derecha
        pyautogui.moveRel(-1, 0)  # Mueve el cursor 1 píxel a la izquierda
        time.sleep(interval)  # Espera el intervalo especificado (en segundos)
        print("ya anda jalando")

if __name__ == "__main__":
    keep_awake()