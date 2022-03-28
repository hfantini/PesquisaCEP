import React from "react";
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {

            flex: 1,
            flexDirection: "row",
            height: 45,
            borderBottomWidth: 1,
            borderBottomColor: "#15C243",

            cLeft:
            {
                paddingLeft: 10,
                paddingRight: 10,
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
                borderRightWidth: 1,
                borderRightColor: "#15C243",
                height: 45
            },
            cRight:
            {
                flex: 2,
                alignItems: "flex-start",
                justifyContent: "center",
                height: 45,
                paddingLeft: 10
            }
        },

        textKey:
        {
            color: "#15C243",
            fontSize: 14
        },

        textValue:
        {
            color: "#15C243",
            fontSize: 18
        }
    }
)

// == COMPONENT

export default function ResultLine(props)
{
    // EVENTS

    function onValuePress(value)
    {
        if(value !== null && value !== "")
        {
            alert(value);
        }
    }

    return(

        <View style={style.container}>

            <View style={style.container.cLeft}>

                <Text style={style.textKey}>
                    {props.item.key.toUpperCase()}:
                </Text>

            </View>

            <TouchableOpacity style={style.container.cRight} onPress={() => onValuePress(props.item.value)}>

                <View>
                    
                    <Text style={style.textValue} 
                          numberOfLines={1}>

                                {props.item.value}
                    </Text>

                </View>

            </TouchableOpacity>

        </View>
    )
}