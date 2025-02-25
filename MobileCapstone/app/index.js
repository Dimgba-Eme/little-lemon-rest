import * as React from 'react';
import { Text, View, Pressable, Button, StyleSheet } from "react-native";
import * as SQLite from 'expo-sqlite';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const createDB = async () => {
  console.log('create');
  try {

    const db = await SQLite.openDatabaseAsync('myDB');

    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS student (studNo INTEGER PRIMARY KEY NOT NULL, firstName TEXT NOT NULL, lastName TEXT NOT NULL);
      `);
  } catch (error) {
    console.error('An error occurred!', error);
  }
}

const insertStudent = async () => {
  console.log('insert');
  try {

    const db = await SQLite.openDatabaseAsync('myDB');

    const result = await db.runAsync(' INSERT INTO student (studNo, firstName, lastName) VALUES (?, ?, ?)', 28, "Prince", "Dimgba");
    console.log(result.lastInsertRowId, result.changes);

  } catch (error) {
    console.error('An error occurred!', error);
  }
}
const selectStudent = async () => {
  console.log('select');
  try {

    const db = await SQLite.openDatabaseAsync('myDB');

    const allRows = await db.getAllAsync('SELECT * FROM student');
    // console.log("allRows: ", allRows);
    for (const row of allRows) {
      console.log(row.studNo, row.firstName, row.lastName);
    }
  } catch (error) {
    console.error('An error occurred!', error);
  }
}


const updateStudent = async () => {
  console.log('update');
  try {

    const db = await SQLite.openDatabaseAsync('myDB');

    await db.runAsync(' UPDATE student SET lastName = ? WHERE studNo = ?', ["Daniel", 25]);

  } catch (error) {
    console.error('An error occurred!', error);
  }
}
const deleteStudent = async () => {
  console.log('delete');
  try {

    const db = await SQLite.openDatabaseAsync('myDB');

    await db.runAsync(' DELETE FROM student WHERE studNo = $no ', { $no: 2 });

  } catch (error) {
    console.error('An error occurred!', error);
  }
}


export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Welcome</Text>

        <View style={styles.container}>
          <Button title='CREATE DATABASE' onPress={() => createDB()} />
        </View>

        <View style={styles.container}>
          <Button title='INSERT STUDENT' onPress={() => insertStudent()} />
        </View>
        <View style={styles.container}>
          <Button title='SELECT STUDENT' onPress={() => selectStudent()} />
        </View>

        <View style={styles.container}>
          <Button title='UPDATE STUDENT' onPress={() => updateStudent()} />
        </View>
        <View style={styles.container}>
          <Button title='DELETE STUDENT' onPress={() => deleteStudent()} />
        </View>

      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 300,
  },

  title: {
    fontSize: 30,
  },
})


