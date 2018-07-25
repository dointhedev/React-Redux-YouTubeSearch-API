import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
    FormGroup,
    Input
} from 'reactstrap';

const SearchForm = props => (
    <Card className="mt-2 mb-3">
        <CardHeader className="blue-bg text-white">
            <h4>Search for a Video on&nbsp;
                <b>youTube</b>
            </h4>
        </CardHeader>
        <CardBody>
            <Form inline>
                <FormGroup>
                    <Input
                        className="w-100"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search YouTube"
                        value={props.term}/>
                </FormGroup>
                <Button className="ml-3" color="info">Search Now</Button>
            </Form>
        </CardBody>
    </Card>

);

export default SearchForm;

// <form>   <div className="form-group">     <label
// htmlFor="search">Search:</label>     <input
// onChange={props.handleInputChange}       value={props.search} name="search"
//     type="text"       className="form-control" placeholder="Search for a Gif"
//       id="search"     />     <button onClick={props.handleFormSubmit}
// className="btn btn-primary mt-3"     >       Search     </button>   </div>
// </form>