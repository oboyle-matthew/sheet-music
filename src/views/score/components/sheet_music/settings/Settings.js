import React from 'react';
import {Slider, Select, Switch} from "antd";

const { Option } = Select;

class Settings extends React.Component {

    renderTypeDropdown = (value, update) => {
        return <Select defaultValue={value} onChange={update}>
            <Option value='sheet'>Sheet</Option>
            <Option value='shapes'>Shapes</Option>
        </Select>
    };

    renderSlider = (value, update, min, max, step) => {
        return <Slider defaultValue={value} onAfterChange={update} min={min} max={max} step={step} />
    };

    renderToggle = (value, update) => {
        return <Switch checked={value} onChange={update} />
    };

    renderUserInput = (key, value) => {
        const { updateKey } = this.props;
        const update = value => updateKey(key, value);
        switch(key) {
            case "type":
                return this.renderTypeDropdown(value, update);
            case "noteSize":
            case "staffSpacing":
            case "systemSpacing":
                return this.renderSlider(value, update, 5, 50);
            case "barsPerLine":
                return this.renderSlider(value, update, 1, 10);
            case "leftMargin":
            case "rightMargin":
            case "upMargin":
            case "downMargin":
                return this.renderSlider(value, update, 0, 100);
            case "noteLabels":
            case "autoSpacing":
                return this.renderToggle(value, update);


        }
    }

    renderSetting = (key, value) => {
        return <div>
            {key}:
            <br/>
            {this.renderUserInput(key, value)}
        </div>

        // switch(key) {
        //     case "type":
        //         return <div>
        //             {key} = {value}
        //             <br/>
        //             {this.renderTypeDropdown(value, update)}
        //         </div>
        //
        // }
        // if (key === 'type') {
        //
        // }
        // if (typeof(value) === 'object') {
        //     return <div>
        //         {key}: ...
        //     </div>
        // } else if (typeof(value) === 'number') {
        //     return <div>
        //         {key} = {value}:
        //         {this.renderSlider(value, update, 1, 5)}
        //     </div>
        // }
        // else {
        //     return <div>
        //         {key}: {value}
        //     </div>
        // }
    };

    render() {
        const { scoreInfo } = this.props;
        return (
            <div>
                <h3>Settings</h3>
                {Object.keys(scoreInfo).map(key => this.renderSetting(key, scoreInfo[key]))}
            </div>
        );
    }
}

export default Settings;
