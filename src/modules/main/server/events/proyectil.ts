import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-proyectil', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class proyectil extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('I give you 10 gold.', {
            talkWith: this
        })
        player.gold += 10
    }
} 