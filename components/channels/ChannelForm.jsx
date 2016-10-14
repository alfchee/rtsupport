import React, {Component} from 'react';

class ChannelForm extends Component {

    onSubmit(e) {
        e.preventDefault;
        const node = this.ref.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);

        // cleaning the input
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    type='text'
                    ref='channel'
                />
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm