import { types as t, IModelType } from 'mobx-state-tree'

interface BaseProps {
  name: string
  timer: Timer
}

export interface Base extends BaseProps {
  changeName: (newName: string) => void
}

interface TimerProps {
  age: number
}

export interface Timer extends TimerProps {
  addAge: () => void
}

export const TimerModel: IModelType<Partial<TimerProps>, Timer> = t.model("Timer", {
  age: t.number
}).actions(self => ({
  addAge(): void {
    self.age += 1
  }
}))


export const BaseModel: IModelType<Partial<BaseProps>, Base> = t.model("Base", {
  name: t.string,
  timer: TimerModel
}).actions(self => ({

  changeName(newName: string): void {
    self.name = newName
  },

}))
