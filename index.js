    let query = { 
	"sender_id": mongoose.Types.ObjectId(user_id),
	"$expr": {
		"$and": [
			{"$eq":  [{ $dayOfMonth: "$createdAt" }, current_day ] },
			{"$eq":  [{ $month: "$createdAt" }, current_month ] },
			{"$eq":  [{ $year: "$createdAt" }, current_year ] },
		]
	}
}
    Looksee.aggregate([
        { '$match': query },
        {
            '$group' : {
                _id: {
                    day: { $dayOfMonth: '$createdAt' },
                    month: { $month: '$createdAt' },
                    year: { $year: '$createdAt' }
                },
                count: { $sum: 1 }
            }
        },
        {'$project': {
            count: 1,
            _id: 0
        }}
                        
    ], async function(err, data){
        
    }
