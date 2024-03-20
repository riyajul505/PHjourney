import PropTypes from 'prop-types'; 
const Link = ({routes}) => {
    // this component is responsible for generating routes for routes defined in the component definition 
    return (
        
            <li className="mr-4">
                <a href={routes.path}>{routes.name}</a>
                </li>
        
    );
};


export default Link;

Link.propTypes = {
    routes: PropTypes.object
}