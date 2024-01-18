import {message, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import React from 'react';
import './file.scss';

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
    state = {
        loading: false,
    };


    render() {
        const {loading, imageUrl} = this.state;
        const uploadButton = (
            <div>
                {this.props.text ? <></> : <PlusOutlined/>}
                {this.props.text ? (<b>{this.props.text}</b>) : (
                    <div style={{marginTop: 8}}>Upload you company's logo</div>
                )}
            </div>
        );
        return (
          <Upload
            name="avatar"
            listType="picture-card"
            style={{width: "100%"}}
            className="avatar-uploader"
            showUploadList={false}
            accept="image/png, image/jpeg"
            beforeUpload={beforeUpload}
            onChange={this.props.handleChange}
          >
            {this.props.imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        );
    }
}

export default Avatar
