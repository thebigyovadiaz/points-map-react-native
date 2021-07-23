import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointsTemp, setPointsTemp] = useState({});
  const [pointName, setPointName] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_point');
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_point');
    setPointsTemp(nativeEvent.coordinate);
    setVisibility(true);
  }

  const handleChangeText = (name) => {
    setPointName(name);
  }

  const handleSubmit = () => {
    const newObjectPoints = {
      name: pointName,
      coordinate: pointsTemp
    };

    setPoints(points.concat(newObjectPoints));
    setVisibility(false);
    setPointName('');
  }

  const handleCancel = () => {
    setPointName('');
    setVisibility(false);
  }

  const handleListPoints = () => {
    setVisibilityFilter('all_points');
    setVisibility(true);
  }

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter} />
      <Panel
        onPressLeft={handleListPoints} textLeft='List'
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        { visibilityFilter === 'new_point'
            ?
              <>
                <Input title="Point Name" placeholder="Point name..." onChangeText={handleChangeText} />
                <Button title="Acept" onPress={handleSubmit} />
                {/* <Button title="Cancel" onPress={handleCancel} /> */}
              </>
            :
              <List listPoints={points} closeModal={() => setVisibility(false)} />
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
