interface Player {

  setAudio(audio: any): void

  play(): void
}

export class PlayerService implements Player {
  private audio: any

  public setAudio(audio: any): void {
    this.audio = audio
  }

  public play(): void {
    this.audio.play()
  }
}
