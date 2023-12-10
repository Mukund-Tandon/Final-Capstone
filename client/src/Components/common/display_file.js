import React, { Component } from 'react';
import { Card, Button, Space } from 'antd';
import { FileOutlined } from '@ant-design/icons';

import '../css/display_file.css';

class DisplayFile extends Component {
    render() {
        let fhash = this.props.props;
        let that = this.props.that;
        return (
            <div>
                <Card title={fhash[0]} bordered={true}>
                    <Space>
                        <Button
                            className='button-81'
                            type="primary"
                            onClick={that.showFile.bind(that, fhash, true)}
                            icon={<FileOutlined />}
                        >
                            Show File
                        </Button>
                    </Space>
                </Card>
            </div>
        );
    }
}

export default DisplayFile;
