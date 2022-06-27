export const getPosts = async(req,res)=>{
    try{
    
    res.status(200).json(postMessages);

    }
    catch(error){
        res.status(404).json({message: error.message});

    }

}