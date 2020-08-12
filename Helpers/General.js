import React from "react";
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';



export function idGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function setNotification() {
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(19);
    nextDay.setMinutes(15);

    let notification = {
        title: "User your Flash Cards!",
        body: "It's always good to learn!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: "high",
            sticky: false,
            vibrate: true,
        }
    }

    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status === "granted") {
                Notifications.cancelAllScheduledNotificationsAsync()
                    .catch(error => console.log(error));

                Notifications.scheduleLocalNotificationAsync(
                    notification,
                    {
                        time: nextDay,
                        repeat: "day",
                    }
                ).catch(error => console.log(error))
            }
        })
}
