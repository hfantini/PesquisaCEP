import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import axios from "axios";

import Header from "./Component/Header";
import SearchBar from "./Component/SearchBar";
import ResultView from "./Component/ResultView";

// == STYLES

let style = StyleSheet.create(
	{
		container:
		{
			flex: 1,
			backgroundColor: "#FFFFFF"
		},
		header:
		{
			height: 50
		},
		search:
		{
			height: 150,
		},
		result:
		{
			flex: 3,
		}
	}
)

// == COMPONENT

export default function Main()
{
	// == STATES

	const [state, setState] = useState({curState: "EMPTY", data: null, error: null, value: null});

	// == EVENTS

	function onCEPChange(value)
	{
		setState( {value: value, curState: state.curState} );
	}

	function onClearPress()
	{
		setState( {curState:"EMPTY", data: null, error: null, value: null})
	}

	function onSearchPress()
	{
		setState( {curState:"LOADING"})

		setTimeout(() => {

			if(state.value !== null && state.value !== "")
			{
				axios.get("https://viacep.com.br/ws/" + state.value + "/json").then( (response) => 
				{
					if(response.data.erro != null && response.data.erro == true)
					{
						setState( {curState:"NODATA"})
					}
					else
					{
						let processedData = [];

						for(let count = 0; count < Object.keys(response.data).length ; count++)
						{
							let key = Object.keys(response.data)[count];
							let value = response.data[key];

							processedData.push( {key: key, value: value} )
						}

						setState( {curState:"SHOW", data: processedData})
					}
				},
				(err) =>
				{
					setState( {curState:"ERROR", error: err})
				});
			}
			
		}, 500);
	}

	return (
		<View style={style.container}>
				
				<View style={style.header}>
					<Header></Header>
				</View>

				<View style={style.search}>
					<SearchBar value={state.value} onValueChange={onCEPChange} onSearchPress={onSearchPress} onClearPress={onClearPress}>

					</SearchBar>
				</View>

				<View style={style.result}>

					<ResultView curState={state.curState} value={state.cep} data={state.data} error={state.error}>

					</ResultView>

				</View>
		
		</View>
	)
}