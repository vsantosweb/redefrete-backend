export interface RepositoryInterface {

    /**
     * List All.
     *
     * @param array $payload
     * @return Model
     */
    
    list(): Promise<any>;

    /**
     * Create a model.
     *
     * @param array $payload
     * @return Model
     */
    // create(): Promise<any>;
    
    // /**
    //  * Update a model.
    //  *
    //  * @param array $payload
    //  * @return Model
    //  */

    // update(payload: object, id: number): Promise<any>;

    // /**
    //  * Delete a model.
    //  *
    //  * @param array $payload
    //  * @return Model
    //  */

    // delete(id: number): Promise<any>;

    // /**
    //  * Show a model.
    //  *
    //  * @param array $payload
    //  * @return Model
    //  */
    // show(id: number): Promise<any>;
}