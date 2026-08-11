radio.onReceivedString(function (receivedString) {
    if (receivedString == "OPEN") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S2, 30)
    } else if (receivedString == "CLOSE") {
        robotbit.Servo(robotbit.Servos.S1, 30)
        robotbit.Servo(robotbit.Servos.S2, 90)
    }
})
radio.setGroup(1)
