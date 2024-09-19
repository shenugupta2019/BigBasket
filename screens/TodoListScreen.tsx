
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

export interface Todo {
    todos: Todo[];
  }
  
  export interface Todo {
    id: Number;
    title: string;
    completed: Boolean;
    priority: string;
  }

  const fetchData = async () => {
    const resp = await fetch("https://dummyapi.online/api/todos");
    const data = await resp.json();
    const filteredData = 
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


const TodoListScreen: React.FC = () => {

    return (
        <View>
        </View>
      );
    };

    export default TodoListScreen;





  
  