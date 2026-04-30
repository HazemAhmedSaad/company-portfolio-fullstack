export interface IMessage {
success: boolean
message: string
data: IMessageData
}

export interface IMessageData {
    _id: string
    name: string
    email: string
    subject: string
    phone: string
    compenyName: string
    message: string
    isDeleted: boolean
    isRead: boolean
    isAnswered: boolean
    isSpam: boolean
    createdAt: string
    updatedAt: string
    __v: number
}


export interface IMessageUpdat {
    isRead: boolean
    isAnswered: boolean
    isSpam: boolean
}


