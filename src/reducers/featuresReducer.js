export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featuresReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_FEATURES':
            let feature = state.car.features.filter(item => {
                return item.id === action.payload.id
            })
            if (feature.length === 0){
                return {
                    ...state, car: {...state.car, features: [...state.car.features, action.payload]}, additionalPrice: state.additionalPrice + action.payload.price
                }
            } else {
                return state
            }
        case 'DELETE_FEATURES':
            let deleteFeature = state.car.features.filter(item => {
                return item.id !== action.payload.id
            })
            console.log(deleteFeature)
            // let deleteFeature = state.car.features.indexOf(action.payload)
            // console.log('find index', deleteFeature)
            // console.log('splice',state.car.features.splice(deleteFeature))
            // console.log('array',state.car.features)
            if (deleteFeature.length !== state.car.features){
                return {
                    ...state, car: {...state.car, features: deleteFeature}, additionalPrice: state.additionalPrice - action.payload.price
                }
            } else {
                return state
            }
        default:
            return state
        }
    
}