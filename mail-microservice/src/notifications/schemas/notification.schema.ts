import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema({
    timestamps: true,
})
export class Notification {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true,
        unique: true,
    })
    planId: Types.ObjectId;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        required: true,
    })
    userId: Types.ObjectId[];

    @Prop(
        {
            required: true,
        }
    )
    message: string

    @Prop(
        {
            required: true,
        }
    )
    scheduledAt: Date;

    @Prop({
        type: Object,
        default: {},
    })
    options: { [key: string]: string | number };
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);