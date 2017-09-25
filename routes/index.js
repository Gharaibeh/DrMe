exports.index = function(req, res) {
    res.render('default',{
        title: 'Home',
        documenttype: 'Medical Note',
        patient: 'Mr. John Doe',
        users: ['Dr. Ray Martin', 'Dr. Linda James', 'Nurse Reynold Amron']
    });
}

exports.about = function(req,res){
    res.render('default', {
        title: 'About Us',
        textpart: 'We are a medical document management app'
    });
}