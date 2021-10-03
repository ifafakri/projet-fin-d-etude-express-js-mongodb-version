const page = require('./../models/page')
const mysql = require('mysql')
const connectionsMongoDB = require('./connectionsMongoDB.js')
const partenair = require('./../models/partenaire')
const media = require('./../models/media')
const projet = require('./../models/projet')
const formation = require('./../models/formation')
const recrutement = require('./../models/recrutement')
const contact = require('./../models/contact')
const commantair = require('./../models/commantaire')
const presentation = require('./../models/presentation')
const developpement = require('./../models/developpement')
const inscrir = require('./../models/inscrir')
const home = require('./../models/home')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'jci'
})
function ajoutpages() {
    connectionsMongoDB.connection()
    var p = new page({
        home: [{ titre: 'vision', description: 'rrrr', image: 'fgg' }, { titre: 'credo', description: 'ggh', image: 'fgg' }],
        historique: [{ titre: 'partie1', description: '  o', image: 'rfg' }, { titre: 'partie2', description: 'ttt', image: 'fff' }],
        adhesion: [{ titre: 'elm1', description: 'yyyy' }, { titre: 'elm2', description: 'yyyy' }, { titre: 'elm3', description: 'yyyy' }],
        presentation: [{ titre: 'presentationgeneral', description: 'pppppp', image: 'ppppp' }, { titre: 'mission', description: 'ppppp', image: ' iiiii' }, { titre: 'vision', description: 'ffff', image: 'rrrrrr' }, { titre: 'credo', description: 'rrrrr', image: 'jjjjjj' }]

    })
    p.save().then(function () {
        console.log('pages')
    })


}

exports.listePage = async function (req, res, next) {
    await connectionsMongoDB.connection()
    const arr = await page.find()
    res.json(arr)
}
/*
exports.modifierHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"vision"}
    var upd={$set:{"home.0.description":req.body.description,"home.0.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}

exports.modifierCredoHome=async function (req,res,next){
    await connectionsMongoDB.connection()
   
    var q={"home.titre":"credo"}
    var upd={$set:{"home.1.description":req.body.description,"home.1.image":req.body.image}}
    var op={new: true};
    var u=await page.findOneAndUpdate(q,upd,op)
   
    
    console.log('vision modifier')
}
*/

//modifier vision home


exports.modifierVisionHome = async function (req, res) {



    const val = [req.body.titre, req.body.description, 'vision']

    db.query('UPDATE homes SET titre=?,description=? WHERE element=?', val, (err, data, fields) => {

        res.send('vision home modifier !')

    })





}



exports.modifiermissionHome = async function (req, res) {

    const val = [req.body.titre, req.body.description, 'mission']

    db.query('UPDATE homes SET titre=?,description=? WHERE element=?', val, (err, data, fields) => {

        res.send('mission home modifier !')

    })


}

exports.modifieCredoHome = async function (req, res) {

    const val = [req.body.titre, req.body.description, 'credo']

    db.query('UPDATE homes SET titre=?,description=? WHERE element=?', val, (err, data, fields) => {

        res.send('credo home modifier !')

    })




}


exports.modifiePresentationHome = async function (req, res) {

    const val = [req.body.titre, req.body.description, req.body.image, 'presentation']

    db.query('UPDATE homes SET titre=?,description=?,image=? WHERE element=?', val, (err, data, fields) => {

        res.send('presentaion home modifier !')

    })




}
// get Home

exports.getHome = async function (req, res) {

    db.query('SELECT * FROM homes', (err, data, fields) => {
        if (err) throw err

        var h = {
            vision: { titre: data[0].titre, description: data[0].description },
            mission: { titre: data[1].titre, description: data[1].description },
            presentation: { titre: data[2].titre, description: data[2].description, image: data[2].image },
            credo: { titre: data[3].titre, description: data[3].description },

        }
        console.log(h)


        res.send(h)
    })



}




//MODIFIER HISTORIQUE PARTIE 1
exports.modifierHistoriqueP1 = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "historique.titre": "partie1" }
    var upd = { $set: { "historique.0.description": req.body.description, "historique.0.image": req.body.image } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)


    console.log('vision modifier')
}
//MODIFIER HISTORIQUE PARTIE 2
exports.modifierHistoriqueP2 = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "historique.titre": "partie2" }
    var upd = { $set: { "historique.1.description": req.body.description, "historique.1.image": req.body.image } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)


    console.log('vision modifier')
}
//MODIFIER ADHESION ELM1
exports.modifierAdhesionElm1 = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "adhesion._id": "604e125013c6473b10724556" }
    var upd = { $set: { "adhesion.0.titre": req.body.titre, "adhesion.0.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)
    console.log('vision modifier')


}
//MODIFIER ADHESION ELM2
exports.modifierAdhesionElm2 = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "adhesion._id": "604e125013c6473b10724557" }
    var upd = { $set: { "adhesion.1.titre": req.body.titre, "adhesion.1.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}
//MODIFIER ADHESION ELM3
exports.modifierAdhesionElm3 = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "adhesion._id": "604e125013c6473b10724558" }
    var upd = { $set: { "adhesion.2.titre": req.body.titre, "adhesion.2.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}

//MODIFIER PRESENTATIONgENERAL

exports.modifierPresentationGen = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "presentation.titre": "presentationgeneral" }
    var upd = { $set: { "presentation.0.description": req.body.description, "presentation.0.image": req.body.image } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}
//MODIFIER PRESENTATIOn MISION

exports.modifierPresentationMission = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "presentation._id": "604e125013c6473b1072455a" }
    var upd = { $set: { "presentation.1.titre": req.body.titre, "presentation.1.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}
//MODIFIER PRESENTATIOn MISION

exports.modifierPresentationVision = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "presentation._id": "604e125013c6473b1072455b" }
    var upd = { $set: { "presentation.2.titre": req.body.titre, "presentation.2.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}
//MODIFIER PRESENTATIOn Credo

exports.modifierPresentationCredo = async function (req, res, next) {
    await connectionsMongoDB.connection()

    var q = { "presentation._id": "604e125013c6473b1072455c" }
    var upd = { $set: { "presentation.3.titre": req.body.titre, "presentation.3.description": req.body.description } }
    var op = { new: true };
    var u = await page.findOneAndUpdate(q, upd, op)



}
//Ajouter partenair
exports.AjouterPartenaire = async function (req, res, next) {
    await connectionsMongoDB.connection()
    var p = new partenair({ image: req.body.image })
    p.save().then(function () {
        console.log('partenaire ajouter')
    })
}

//get Partenaire 

exports.getPartenaire = async function (req, res, next) {

}

//supprimer partenair
exports.DeletePartenaire = async function (req, res) {
    await connectionsMongoDB.connection()
    var d = await partenair.findOneAndDelete({ _id: req.params.id })
    res.send("partenair supprimer ")

}

// creation media
exports.creationMedia = async function (req, res) {

    val = [req.body.titre, req.body.description, req.body.image, req.body.video]
    db.query("INSERT media(titre,description,image,video) VALUES(?)", [val], (err, data, fields) => {
        if (err) throw err
        else
            res.send('media Ajouter')
    })





}
//modification media 

exports.modifierMedia = async function (req, res) {



    val = [req.body.titre, req.body.description, req.body.image, req.body.video, req.body.id]
    db.query("UPDATE media SET titre=?,description=?,image=?,video=? WHERE id=?", val, (err, data, fields) => {

        if (err) throw err
        else
            res.send("media modifier")
    })




}
// get media
exports.getMedia = async function (req, res) {

    db.query("SELECT * FROM media", (err, data, fields) => {

        if (err) throw err
        else
            res.send(data)
    })

}
//supprision media 

exports.suppresionmedia = async function (req, res) {

    db.query("DELETE FROM media WHERE id=?", [req.params.id], (err, data, fields) => {
        if (err) throw err
        else
            res.send("media id :" + req.params.id + ' et supprimer')
    })




}

//PROJET 

//Creation PROJET 

exports.creationProjet = async function (req, res) {
    const coun=q=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT max(id) as mit FROM projets",(err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
        })
    }
    val2 = ["", req.body.titre, req.body.text, req.body.dat]
    
    db.query("INSERT INTO projets(image,titre,text,dat) VALUES(?)", [val2], (err, data, fields) => {
        if (err) throw err
        res.send('Projet Ajoutee !')

    })
    if (req.body.image.length > 0) {
        req.body.image.forEach(async element => {
           const x=await coun()
           
            val = [x[0].mit, element]
            db.query('INSERT INTO images VALUES(?)', [val], (err, data) => {
                if (err) throw err

            })

        })
    }


}






    //get un projet
    exports.GetUnProjet = async function (req, res) {
        const da = q => {
            return new Promise((resolve, reject) => {
                db.query("SELECT image FROM images WHERE idPr=?", [req.params.id], (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }


        const d = await da()
        db.query("SELECT * FROM projets WHERE id=?", [req.params.id], (err, data, fields) => {

            if (err) throw err

            if (data.length > 0) {

                const d1 = []

                d.forEach(element => {
                    d1.push(element.image)
                });

                console.log(d1)

                const p = {
                    id: data[0].id,
                    titre: data[0].titre,
                    text: data[0].text,
                    image: d1
                }
                res.json(p)
            }

        })



    }



    // get liste des  Projets
    exports.getlistprojet = async function (req, res) {


        function da(id) {
            return new Promise((resolve, reject) => {
                db.query("SELECT image FROM images WHERE idPr=?", [id], (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }
        const rp = q => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM projets", (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }

        const lp = []
        const p = await rp()

        if (p.length > 0) {

            var t = []
            var i = 0
            p.forEach(async element => {

                var d = await da(element.id)
                var d1 = []

                d.forEach(element2 => {
                    d1.push(element2.image)
                });

                var projet = {
                    id: element.id,
                    titre: element.titre,
                    text: element.text,
                    image: d1
                }
                t.push(projet)

                if (i === (p.length) - 1) {
                    res.send(t)
                }
                i++
            });



        }






    }
    //modification projet
    exports.moduficationProjet = async function (req, res) {


        if (req.body.image.length > 0) {
            db.query("DELETE FROM images WHERE idPr=?", [req.body.id])
        }

        req.body.image.forEach(element => {
            val = [Number(req.body.id), element]
            db.query('INSERT INTO images VALUES(?)', [val], (err, data) => {
                if (err) throw err

            })

        });
        val = [req.body.titre, req.body.text, req.body.dat, Number(req.body.id)]
        db.query("UPDATE projets  SET titre=?,text=?,dat=? WHERE id=?", val, (err, data, fields) => {
            if (err) throw err
            else
                res.send('projet modifier')
        })
    }
    //suppresion PROJET
    exports.SuppressionProjet = async function (req, res) {

        db.query("DELETE FROM projets WHERE id=?", [req.params.id], (err, data, fields) => {
            if (err) throw err
            else
                res.send("projet de id =" + req.params.id + ' et supprimer')
        })
        db.query("DELETE FROM images WHERE idPr=?", [req.body.id])



    }


    //formations

    //Creation PROJET 


function boolg(val){
    if(val=="true" || val=="1"){
        return true
    }else{
        return false
    }
}

    exports.creationformation = async function (req, res) {
        val2 = ["", req.body.titre, req.body.text, req.body.dat, req.body.formateur, "false", req.body.liens]
        console.log(req.body)
        db.query("INSERT INTO formations(image,titre,text,dat,formateur,inscrir,liens) VALUES(?)", [val2], (err, data, fields) => {
            if (err) throw err
            res.send('Formation Ajoutee !')

        })


        const coun=q=>{
            return new Promise((resolve,reject)=>{
                db.query("SELECT max(id) as mit FROM formations",(err,data)=>{
                    if(err) reject(err)
                    resolve(data)
                })
            })
        }
        
       
        if (req.body.image.length > 0) {
            req.body.image.forEach(async element => {
               const x=await coun()
               
                val = [x[0].mit, element]
                db.query('INSERT INTO imagesf VALUES(?)', [val], (err, data) => {
                    if (err) throw err
    
                })
    
            })
        }




    }
    //get un projet
    exports.GetUneFormation = async function (req, res) {

        const da = q => {
            return new Promise((resolve, reject) => {
                db.query("SELECT image FROM imagesf WHERE idPr=?", [req.params.id], (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }


        const d = await da()
        db.query("SELECT * FROM formations WHERE id=?", [req.params.id], (err, data, fields) => {

            if (err) throw err

            if (data.length > 0) {

                const d1 = []

                d.forEach(element => {
                    d1.push(element.image)
                });

               
                const p = {
                    id: data[0].id,
                    titre: data[0].titre,
                    text: data[0].text,
                    dat:data[0].dat,
                    formateur:data[0].formateur,
                    inscrir:boolg(data[0].inscrir),
                    liens:data[0].liens,
                    image: d1
                }
                res.json(p)
            }

        })


    }
    // get liste des  Projets
    exports.getlistFormation = async function (req, res) {
        function da(id) {
            return new Promise((resolve, reject) => {
                db.query("SELECT image FROM imagesf WHERE idPr=?", [id], (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }
        const rp = q => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM formations", (err, data) => {
                    if (err) reject(err)

                    resolve(data)
                })
            })
        }

        const lp = []
        const p = await rp()

        if (p.length > 0) {

            var t = []
            var i = 0
            p.forEach(async element => {

                var d = await da(element.id)
                var d1 = []

                d.forEach(element2 => {
                    d1.push(element2.image)
                });

                var projet = {
                    id: element.id,
                    titre: element.titre,
                    text: element.text,
                    dat:element.dat,
                    formateur:element.formateur,
                    inscrir:boolg(element.inscrir),
                    liens:element.liens,
                    image: d1
                }
                t.push(projet)

                if (i === (p.length) - 1) {
                    res.send(t)
                }
                i++
            });



        }

    }
    //modification formation moduficationFormfation
    exports.moduficationFormation = async function (req, res) {

       
        if (req.body.image.length > 0) {
            db.query("DELETE FROM imagesf WHERE idPr=?", [req.body.id])
        

        req.body.image.forEach(element => {
            val = [Number(req.body.id), element]
            db.query('INSERT INTO imagesf VALUES(?)', [val], (err, data) => {
                if (err) throw err

            })

        });
}

        val2 = [req.body.titre, req.body.text, req.body.dat, req.body.formateur, req.body.liens, Number(req.body.id)]

        db.query("UPDATE formations  SET titre=?,text=?,dat=?,formateur=?,liens=? WHERE id=?", val2, (err, data, fields) => {
            if (err) throw err
            else
            console.log('projet modifier')
        })

    }
    //suppresion formation
    exports.SuppressionFormation = async function (req, res) {

        val = [req.params.id]
        db.query("DELETE  FROM formations WHERE id=?", val, (err, data, fields) => {
            if (err) throw err
            else
                res.send('formation de id :' + req.params.id + ' et supprimer')
        })




    }

    //Ajout recrutement
    exports.Creationrecrutement = async function (req, res) {
        await connectionsMongoDB.connection()
        var r = new recrutement({
            nom: req.body.nom,
            prenom: req.body.prenom,
            datenais: req.body.datenais,
            mail: req.body.mail,
            telephone: req.body.telephone,
            message: req.body.message,
            reponce: false
        })

        r.save()

    }
    //listeRecrutement
    exports.getRecrutement = async function (req, res) {
        await connectionsMongoDB.connection()
        var p = await recrutement.find({})
        res.json(p)

    }

    //get un recrutement

    exports.getUnRecrutement = async function (req, res) {
        await connectionsMongoDB.connection()
        var r = await recrutement.findById(req.params.id)
        res.json(r)
    }

    //supprimer recrutement

    exports.supprimerRecrutement = async function (req, res) {
        await connectionsMongoDB.connection()
        var r = await recrutement.findByIdAndDelete(req.params.id)
        res.send('recrutement supprimer ')

    }





    // AJOUT CONTACT

    exports.AjoutContact = async function (req, res) {

        val = [req.body.nom, req.body.email, req.body.sujet, req.body.message, 'false']
        db.query("INSERT INTO contacts(nom,email,sujet,message,repond) VALUES(?)", [val], (err, data) => {
            if (err) throw err
            else
                console.log('Contact Ajouter')
        })




    }

    //get All Contact

    exports.getAllContact = async function (req, res) {

        db.query("SELECT * FROM contacts", (err, data) => {
            if (err) throw err
            else
                res.send(data)
        })
    }


    //  Commantaire


    // Ajou commantair 
    exports.AjoutCommantaire = async function (req, res) {




        val = [req.body.idAction, req.body.comantaire, req.body.nom, req.body.email, req.body.siteweb]
        db.query("INSERT INTO commantairs(idAction,comantaire,nom,email,siteweb) VALUES(?)", [val], (err, data, fields) => {
            if (err) throw err
            else
                res.send("commantaire Ajouter")
        })




    }

    //supprimer commantaire 

    exports.SupprimerCommantair = async function (req, res) {

        db.query("DELETE FROM commantairs WHERE id=? ", [req.params.id], (err, data, fields) => {
            if (err) throw err
            else
                res.send("commantaire d id : " + req.params.id + " supprimer ")
        })



    }

    // get les commantaires d un Action

    exports.getCommantair = async function (req, res) {


        db.query("SELECT * FROM commantairs WHERE idAction=? ", [req.params.id], (err, data, fields) => {

            if (err) throw err
            else
                res.send(data)

        })





    }

    exports.ModifierPresentation2 = async function (req, res) {



        const val = [req.body.titre, req.body.description, req.body.video, 1]

        db.query('UPDATE presentations SET titre=?,description=?,video=? WHERE id=?', val, (err, data, fields) => {

            res.send('vision home modifier !')

        })



    }


    exports.getPresentation2 = async function (req, res) {
        const val = [1]

        db.query('SELECT * FROM presentations  WHERE id=?', val, (err, data, fields) => {

            res.json(data[0])

        })

    }



    // developpement


    //   Ajout developpement
    exports.AjoutDeveloppement = async function (req, res) {

        val = [req.body.titre, req.body.icon, req.body.text]
        db.query("INSERT INTO developpements(titre,icon,text) VALUES(?)", [val], (err, data, fields) => {
            if (err) throw err
            else
                res.send('developpements Ajouter')

        })
    }

    //get developpement

    exports.getDeveloppement = async function (req, res) {

        db.query("SELECT * FROM developpements WHERE id=?", [req.params.id], (err, data, fields) => {
            if (err) throw err
            if (data.length > 0)
                res.send(data[0])

        })





    }

    // get tout les developpement


    exports.getlistDeveloppement = async function (req, res) {
        db.query("SELECT * FROM developpements", (err, data, fields) => {
            if (err) throw err

            res.send(data)

        })


    }
    // supprimer un developpement


    exports.SupprimDeveloppement = async function (req, res) {



        db.query("DELETE FROM developpements WHERE id=?", [req.params.id], (err, data, fields) => {

            if (err) throw err
            else
                res.send("developpement supprimer")

        })


    }

    // modifier developpement 


    exports.ModifierDeveloppement = async function (req, res) {



        val = [req.body.titre, req.body.icon, req.body.text, req.body.id]
        db.query("UPDATE developpements SET titre=?,icon=?,text=? WHERE id=?", val, (err, data, fields) => {
            if (err) throw err
            else
                res.send("developpement supprimer")


        })

    }


    //supprimer contact 


    exports.supprimerContact = async function (req, res) {


        db.query("DELETE FROM contacts WHERE id=?", [req.params.id], (err, data) => {
            if (err) throw err
            else
                console.log('contacts supprime')
        })



    }


    //inscrir

    exports.AjoutInscrir = async function (req, res) {
        await connectionsMongoDB.connection()



        var insc = new inscrir(
            {
                nom: req.body.nom,
                dat: req.body.dat,
                adresemail: req.body.adresemail,

                telepone: req.body.telepone,
                lienfb: req.body.lienfb,
                profission: req.body.profission,
                domaine: req.body.domaine,
                competance: req.body.competance,
                idform: req.body.idform,
                parrain: req.body.parrain,
                actif: req.body.actif,
                association: req.body.association,
                deplacement: req.body.deplacement,
                objectif: req.body.objectif
            }
        )


        const ins = insc.save()
        res.send("inscrir Ajouter")


    }


    exports.getInscrir = async function (req, res) {

        await connectionsMongoDB.connection()

        var insc = await inscrir.find({ idform: req.params.idform })

        res.json(insc)

    }

    exports.modifFormationInscrir = async function (req, res) {



        val = [req.body.inscrir, req.body.id]
        db.query("UPDATE formations SET inscrir=? WHERE id=?", val, (err, data, fields) => {

            if (err) throw err
            else
                res.send('inscrir du formation et modifier')



        })





    }






    module.exports.ajoutpages = ajoutpages