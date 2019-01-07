import React, {Fragment, Component} from "react";
import PropTypes from "prop-types";

class RainbowFrames extends Component {
    render() {
        let colors = this.props.colors;
        let colorsLength = this.props.colors.length;
        let children = this.props.children;
        return (
            <Fragment>
                {
                    colorsLength ?
                        <RainbowFrames colors={colors.slice(1)}>
                            <div style={{border: "solid 4px " + colors[0], padding: "10px"}}>
                                {children}
                            </div>
                        </RainbowFrames> :
                        children
                }
            </Fragment>
        )
    }
};

RainbowFrames.propTypes = {
    colors: PropTypes.arrayOf(
        PropTypes.string.isRequired
    )
};


export default RainbowFrames;