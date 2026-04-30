controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    scene.cameraFollowSprite(mySprite)
    music.play(music.createSoundEffect(WaveShape.Sine, 512, 0, 155, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
