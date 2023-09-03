require('dotenv').config()
const express = require('express');
const db = require('./db');
const cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')

const app = express();

    app.use(express.json());
app.use(cors());

/*
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
*/

//giver

//Get All Givers
app.get('/api/v1/givers', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM giver');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error', // Send an appropriate error message to the client
        });
    }
});

//Get One Giver
app.get('/api/v1/givers/:id', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM giver where id = $1',
            [
                req.params.id
            ]
        );

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

//Create One Giver
app.post('/api/v1/givers', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO giver (id, name, phone, email, personal_number, role) VALUES ($1, $2, $3, $4, $5, $6) returning *',
            [
                req.body.id,
                req.body.name,
                req.body.phone,
                req.body.email,
                req.body.personal_number,
                req.body.role
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Update One Giver
app.patch('/api/v1/givers/:id', async (req, res) => {
    try {
        let query = 'UPDATE giver SET ';
        let values = [];
        let i = 1;

        for (let key in req.body) {
            query += `${key} = $${i}, `;
            values.push(req.body[key]);
            i++;
        }

        query = query.slice(0, -2);  // Remove the last comma and space

        values.push(req.params.id);
        query += ` WHERE id = $${i} RETURNING *`;

        const result = await db.query(query, values);

        const usersData = result.rows[0];

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Delete One Giver
app.delete('/api/v1/givers/:id', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM giver where id = $1', [req.params.id]);

        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})



//Get All Education1
app.get('/api/v1/education1', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM education1');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error', // Send an appropriate error message to the client
        });
    }
});

//Get One Education1
app.get('/api/v1/education1/:passport_num', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM education1 where passport_num = $1',
            [
                req.params.passport_num
            ]
        );

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

//Create One Education1
app.post('/api/v1/education1', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO education1 (serial_num, first_name, second_name, address, telephone, nationality, uni_name, uni_number, uni_level, passport_num, residence_num, income_sources, maritalstatus, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *',
            [
                req.body.serial_num,
                req.body.first_name,
                req.body.second_name,
                req.body.address,
                req.body.telephone,
                req.body.nationality,
                req.body.uni_name,
                req.body.uni_number,
                req.body.uni_level,
                req.body.passport_num,
                req.body.residence_num,
                req.body.income_sources,
                req.body.maritalstatus,
                req.body.role
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Update One Education1
app.patch('/api/v1/education1/passport_num', async (req, res) => {
    try {
        let query = 'UPDATE education1 SET ';
        let values = [];
        let i = 1;

        for (let key in req.body) {
            query += `${key} = $${i}, `;
            values.push(req.body[key]);
            i++;
        }

        query = query.slice(0, -2);  // Remove the last comma and space

        values.push(req.params.passport_num);
        query += ` WHERE passport_num = $${i} RETURNING *`;

        const result = await db.query(query, values);

        const usersData = result.rows[0];

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Delete One Education1
app.delete('/api/v1/education1/:passport_num', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM education1 where passport_num = $1', [req.params.passport_num]);

        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})




//Get All Education2
app.get('/api/v1/education2', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM education2');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error', // Send an appropriate error message to the client
        });
    }
});

//Get One Education2
app.get('/api/v1/education2/:personal_number', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM education2 where personal_number = $1',
            [
                req.params.personal_number
            ]
        );

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

//Create One Education2
app.post('/api/v1/education2', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO education2 (serial_num, first_name, second_name, address, telephone, personal_number, nationality, school_name, school_number, school_level, income_sources, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *',
            [
                req.body.serial_num,
                req.body.first_name,
                req.body.second_name,
                req.body.address,
                req.body.telephone,
                req.body.personal_number,
                req.body.nationality,
                req.body.school_name,
                req.body.school_number,
                req.body.school_level,
                req.body.income_sources,
                req.body.role
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Update One Education2
app.patch('/api/v1/education2/:personal_number', async (req, res) => {
    try {
        let query = 'UPDATE education2 SET ';
        let values = [];
        let i = 1;

        for (let key in req.body) {
            query += `${key} = $${i}, `;
            values.push(req.body[key]);
            i++;
        }

        query = query.slice(0, -2);  // Remove the last comma and space

        values.push(req.params.personal_number);
        query += ` WHERE id = $${i} RETURNING *`;

        const result = await db.query(query, values);

        const usersData = result.rows[0];

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Delete One Education2
app.delete('/api/v1/education2/:personal_number', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM education2 where personal_number = $1', [req.params.personal_number]);

        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})




//Get All faqir
app.get('/api/v1/faqir', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM faqir');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error', // Send an appropriate error message to the client
        });
    }
});

//Get One faqir
app.get('/api/v1/faqir/:personal_number', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM faqir where personal_number = $1',
            [
                req.params.personal_number
            ]
        );

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

//Create One faqir
app.post('/api/v1/faqir', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO faqir (serial_num, name, personal_number, address, mother_name, mother_personal_number, father_name, father_personal_number, children_number, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *',
            [
                req.body.serial_num,
                req.body.name,
                req.body.personal_number,
                req.body.address,
                req.body.mother_name,
                req.body.mother_personal_number,
                req.body.father_name,
                req.body.father_personal_number,
                req.body.children_number,
                req.body.role
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Update One faqir
app.patch('/api/v1/faqir/:personal_number', async (req, res) => {
    try {
        let query = 'UPDATE faqir SET ';
        let values = [];
        let i = 1;

        for (let key in req.body) {
            query += `${key} = $${i}, `;
            values.push(req.body[key]);
            i++;
        }

        query = query.slice(0, -2);  // Remove the last comma and space

        values.push(req.params.personal_number);
        query += ` WHERE id = $${i} RETURNING *`;

        const result = await db.query(query, values);

        const usersData = result.rows[0];

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Delete One faqir
app.delete('/api/v1/faqir/:personal_number', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM faqir where personal_number = $1', [req.params.personal_number]);

        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})



//Get All yateem
app.get('/api/v1/yateem', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM yateem');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error', // Send an appropriate error message to the client
        });
    }
});

//Get One yateem
app.get('/api/v1/yateem/:personal_number_child', async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM yateem where personal_number_child = $1',
            [
                req.params.personal_number_child
            ]
        );

        const usersData = result.rows.map(user => {
            const date1 = new Date(user.application_date_child);
            const date2 = new Date(user.birth_date_child);
            const date3 = new Date(user.birth_date_dad);
            const date4 = new Date(user.death_date_dad);
            const date5 = new Date(user.birth_date_mom);

            date1.setDate(date1.getDate() + 1);
            const formattedDate1 = date1.toISOString().split('T')[0];

            date2.setDate(date2.getDate() + 1);
            const formattedDate2 = date2.toISOString().split('T')[0];

            date3.setDate(date3.getDate() + 1);
            const formattedDate3 = date3.toISOString().split('T')[0];

            date4.setDate(date4.getDate() + 1);
            const formattedDate4 = date4.toISOString().split('T')[0];

            date5.setDate(date5.getDate() + 1);
            const formattedDate5 = date5.toISOString().split('T')[0];

            return {
                ...user,
                application_date_child: formattedDate1,
                birth_date_child: formattedDate2,
                birth_date_dad: formattedDate3,
                death_date_dad: formattedDate4,
                birth_date_mom: formattedDate5,
            };
        });


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

//Create One yateem
app.post('/api/v1/yateem', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO yateem (serial_num, name_child, gender_child, birth_place_child, educational_level_child, address_child, application_date_child, birth_date_child, school_grade_child, personal_number_child, name_dad, early_work_dad, birth_date_dad, death_reason_dad, death_date_dad, death_location_dad, personal_number_dad, name_mom, current_job_mom, birth_date_mom, maritalstatus, personal_number_mom, name_guardian, relation_guardian, job_guardian, number_of_minors, info, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) returning *',
            [
                req.body.serial_num,
                req.body.name_child,
                req.body.gender_child,
                req.body.birth_place_child,
                req.body.educational_level_child,
                req.body.address_child,
                req.body.application_date_child,
                req.body.birth_date_child,
                req.body.school_grade_child,
                req.body.personal_number_child,

                req.body.name_dad,
                req.body.early_work_dad,
                req.body.birth_date_dad,
                req.body.death_reason_dad,
                req.body.death_date_dad,
                req.body.death_location_dad,
                req.body.personal_number_dad,

                req.body.name_mom,
                req.body.current_job_mom,
                req.body.birth_date_mom,
                req.body.maritalstatus,
                req.body.personal_number_mom,

                req.body.name_guardian,
                req.body.relation_guardian,
                req.body.job_guardian,
                req.body.number_of_minors,

                req.body.info,
                req.body.role
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Update One yateem
app.patch('/api/v1/yateem/:personal_number_child', async (req, res) => {
    try {
        let query = 'UPDATE yateem SET ';
        let values = [];
        let i = 1;

        for (let key in req.body) {
            query += `${key} = $${i}, `;
            values.push(req.body[key]);
            i++;
        }

        query = query.slice(0, -2);  // Remove the last comma and space

        values.push(req.params.personal_number_child);
        query += ` WHERE id = $${i} RETURNING *`;

        const result = await db.query(query, values);

        const usersData = result.rows[0];

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

//Delete One yateem
app.delete('/api/v1/yateem/:personal_number_child', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM yateem where personal_number_child = $1', [req.params.personal_number_child]);

        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})




app.get('/api/v1/children/:parent_id', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM children where parent_id = $1',
            [
                req.params.parent_id
            ]
        );

        const usersData = result.rows.map(user => {
            // Reformat the date to yyyy-mm-dd format and add one day
            const originalDate = new Date(user.child_birth_date);

            // Add one day to the original date
            originalDate.setDate(originalDate.getDate() + 1);

            const formattedDate = originalDate.toISOString().split('T')[0];

            return {
                ...user,
                child_birth_date: formattedDate, // Update the "date" property with the reformatted date
            };
        });


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

app.get('/api/v1/children/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM children');

        const usersData = result.rows;


        res.status(200).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
})

app.post('/api/v1/children', async (req, res) => {

    try {
        const result = await db.query('INSERT INTO children (parent_id, child_name, child_birth_date, child_3_num_personal_number) VALUES ($1, $2, $3, $4) returning *',
            [
                req.body.parent_id,
                req.body.child_name,
                req.body.child_birth_date,
                req.body.child_3_num_personal_number
            ]
        );

        const usersData = result.rows[0];

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});

app.delete('/api/v1/children/:parent_id', async (req, res) => {

    try {
        const result = await db.query('delete from children where parent_id = $1',
            [
                req.params.parent_id
            ]
        );


        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});



// givers

// Post
app.post('/api/v1/add_money', async (req, res) => {

    try {

        const result = await db.query('INSERT INTO add_money (giver_name, receiver_name, receiver_id, giver_id, amount, date, date1, date2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [req.body.giver_name, req.body.receiver_name, req.body.receiver_id, req.body.giver_id, req.body.amount, req.body.date, req.body.date1, req.body.date2])

        const usersData = result.rows[0]

        res.status(201).json({
            status: 'success',
            data: {
                users: usersData
            }
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }

})

// Delete
/*
app.delete('/app/v1/add_money/:giver_id/:receiver_id', async (req, res) => {

    try {

        const result = await db.query('DELETE FROM add_money where giver_id = $1 and receiver_id = $2', [req.params.giver_id, req.params.receiver_id]);

        console.log(result)
        res.status(204).json({
            status: 'success'
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

})
*/

//Update
app.put('/api/v1/add_money/:giver_id/:receiver_id', async (req, res) => {

    try {

        const result = await db.query('UPDATE add_money SET amount = $1, date = $2 WHERE giver_id = $3 AND receiver_id = $4 RETURNING *', [req.body.amount, req.body.date, req.params.giver_id, req.params.receiver_id]);

        const usersData = result.rows

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }
})

//Get
app.get('/api/v1/add_money', async (req, res) => {

    try {

        const result = await db.query('select * from add_money')

        const usersData = result.rows

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }

})

app.get('/api/v1/add_money/getGiver/:giverId', async (req, res) => {
    try {
        const result = await db.query('select * from add_money WHERE giver_id = $1', [req.params.giverId]);
        const usersData = result.rows.map(user => {
            const date = new Date(user.date);
            const date3 = new Date(user.date1);
            const date4 = new Date(user.date2);

            date.setDate(date.getDate() + 1);
            const formattedDate = date.toISOString().split('T')[0];

            date3.setDate(date3.getDate() + 1);
            const formattedDate3 = date3.toISOString().split('T')[0];

            date4.setDate(date4.getDate() + 1);
            const formattedDate4 = date4.toISOString().split('T')[0];

            return {
                ...user,
                date: formattedDate,
                date1: formattedDate3,
                date2: formattedDate4,
            };
        });

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

app.get('/api/v1/add_money/getReceiver/:receiverId', async (req, res) => {

    try {

        const result = await db.query('select * from add_money WHERE receiver_id = $1', [req.params.receiverId])

        const usersData = result.rows.map(user => {
            const date = new Date(user.date);
            const date3 = new Date(user.date1);
            const date4 = new Date(user.date2);

            date.setDate(date.getDate() + 1);
            const formattedDate = date.toISOString().split('T')[0];

            date3.setDate(date3.getDate() + 1);
            const formattedDate3 = date3.toISOString().split('T')[0];

            date4.setDate(date4.getDate() + 1);
            const formattedDate4 = date4.toISOString().split('T')[0];

            return {
                ...user,
                date: formattedDate,
                date1: formattedDate3,
                date2: formattedDate4,
            };
        });

        res.status(200).json({
            status: 'success',
            data: {
                users: usersData
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }

})



app.get('/api/v1/administrator', async (req, res) => {
    try {
        const result = await db.query('select * from administrator')

        const usersData = result.rows

        res.status(200).json({
            status: 'success',
            data: {
                user: usersData
            }
        })
    } catch (err) {
        console.log(err)
    }
})


app.get('/api/v1/serial_num', async (req, res) => {
    try {
        const result = await db.query('select * from serial_num')

        const data = result.rows[0]

        res.status(200).json({
            status: 'success',
            serial_num: data
        })
    } catch (err) {
        console.log(err)
    }
})

app.patch('/api/v1/serial_num', async (req, res) => {
    try {
        const result = await db.query('update serial_num set serial_num = $1 returning *', [req.body.serial_num])

        const data = result.rows[0]

        res.status(200).json({
            status: 'success',
            serial_num: data
        })
    } catch (err) {

    }
})


app.get('/api/v1/serial_num_giver', async (req, res) => {
    try {
        const result = await db.query('select * from serial_num_giver')

        const data = result.rows[0]

        res.status(200).json({
            status: 'success',
            serial_num: data
        })
    } catch (err) {
        console.log(err)
    }
})

app.patch('/api/v1/serial_num_giver', async (req, res) => {
    try {
        const result = await db.query('update serial_num_giver set serial_num = $1 returning *', [req.body.serial_num])

        const data = result.rows[0]

        res.status(200).json({
            status: 'success',
            serial_num: data
        })
    } catch (err) {

    }
})



app.post('/api/v1/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await db.query('SELECT * FROM administrator WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // Compare password hashes
        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // Generate a JWT token

        const secret = process.env.JWT_SECRET
        const token = jwt.sign({ email: user.rows[0].email }, secret);

        return res.json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
});




const port = process.env.PORT || 4005;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
