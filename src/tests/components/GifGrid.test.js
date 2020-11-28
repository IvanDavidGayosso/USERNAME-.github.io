import React from 'react'; 
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs.js');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Facebook';
    

    test('debe de mostrar el componente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category }/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se carga imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/example/img.jpm',
            title: 'img example',
        }];

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });


    

})
