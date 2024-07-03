import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  homeHeader: {
    flexDirection: 'row',
    columnGap: 80,
    paddingVertical: 20,
    justifyContent: 'space-between'
  }, 
  headerIcon: {
    width: 35, 
    height: 35,
    paddingTop: 10,
  }, 
  subHeaderText: {
    flexDirection: 'row', 
    gap: 5, 
    paddingLeft: 10
  },
  iconBackground: {
    backgroundColor: '#D3D3D3',
    borderRadius: 30,
    width: 55,
    height: 55
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  galleryItem: {
    width: 200,
    height: 220,
    flex: 1,
    padding: 5,
    marginRight: 5
  },
  addButton: {
    alignSelf: 'flex-end', 
    marginTop: 180, 
    marginRight: 3, 
    width: 30, 
    height: 30
  },
  itemName: {
    fontSize: 20,
    letterSpacing: 1
  }, 
  itemDescription: {
    fontSize: 15,
    color: '#708090',
    fontWeight: '500',
  }, 
  itemPrice: {
    fontSize: 24,
    color: '#F08080'  
  },
});

export default styles;