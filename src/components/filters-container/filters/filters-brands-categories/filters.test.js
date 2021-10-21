import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters from './filters';
import { Provider } from 'react-redux';
import store from "../../../../redux/store";

const defaultProps = {
    title: 'Categories',
    categoriesData: [
        "Monitors",
        "Laptops",
        "Video cards",
        "Gaming keyboards",
        "Computer mouse",
        "SSD",
        "Sound cards",
        "RAM"
      ],
      hasLine: true
}


describe('Categories checkbox', () => {

    test('Must have a header', () => {
        render(
            <Provider store={store}>
                <Filters {...defaultProps}/>
            </Provider>
        )
    
        screen.getByText('Categories');
    })
    
    test('Must contain all checkboxes from props', () => {
        render(
            <Provider store={store}>
                <Filters {...defaultProps}/>
            </Provider>
        )
    
        defaultProps.categoriesData.forEach(category => {
            screen.getByText(category)
        });    
    })

    test('All checkboxes must be uncheked by default', () => {
        render(
            <Provider store={store}>
                <Filters {...defaultProps}/>
            </Provider>
        )
    
        const elements = document.querySelectorAll('filters__checkbox-square');

        elements.forEach(element => {
            expect(element.checked).toBe(false);
        })
    })

    test('Must have a line', () => {
        render(
            <Provider store={store}>
                <Filters {...defaultProps}/>
            </Provider>
        )

        const line = document.querySelector('.filters_line');

        expect(line.outerHTML).toStrictEqual('<div class="filters_line"></div>');
    })

})
