import Letter from "./Letter"
const Matrix = () =>{
    return(
        <div className="matrix">
            {/* basically we make 6*5 matrix because we have 6 chances to guess 5 letter word */}
            {/* letterPosition means column number and attemptsValue means row number */}
            {/* row 1 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={0} />
                <Letter letterPosition={1} attemptsValue={0} />
                <Letter letterPosition={2} attemptsValue={0} />
                <Letter letterPosition={3} attemptsValue={0} />
                <Letter letterPosition={4} attemptsValue={0} />
            </div>
            {/* row 2 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={1} />
                <Letter letterPosition={1} attemptsValue={1} />
                <Letter letterPosition={2} attemptsValue={1} />
                <Letter letterPosition={3} attemptsValue={1} />
                <Letter letterPosition={4} attemptsValue={1} />
            </div>
            {/* row 3 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={2} />
                <Letter letterPosition={1} attemptsValue={2} />
                <Letter letterPosition={2} attemptsValue={2} />
                <Letter letterPosition={3} attemptsValue={2} />
                <Letter letterPosition={4} attemptsValue={2} />
            </div>
            {/* row 4 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={3} />
                <Letter letterPosition={1} attemptsValue={3} />
                <Letter letterPosition={2} attemptsValue={3} />
                <Letter letterPosition={3} attemptsValue={3} />
                <Letter letterPosition={4} attemptsValue={3} />
            </div>
            {/* row 5 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={4} />
                <Letter letterPosition={1} attemptsValue={4} />
                <Letter letterPosition={2} attemptsValue={4} />
                <Letter letterPosition={3} attemptsValue={4} />
                <Letter letterPosition={4} attemptsValue={4} />
            </div>
            {/* row 6 */}
            <div className="row">
                <Letter letterPosition={0} attemptsValue={5} />
                <Letter letterPosition={1} attemptsValue={5} />
                <Letter letterPosition={2} attemptsValue={5} />
                <Letter letterPosition={3} attemptsValue={5} />
                <Letter letterPosition={4} attemptsValue={5} />
            </div>
        </div>
    );
}

export default Matrix;