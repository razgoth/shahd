<template lang="">
    <div class="container">
        <div class="table-search">
            
            <input placeholder="Search" class="input" v-model="searchInput" type="text">

            <button @click="$emit('giverDetails', $route.params.name)" >Details</button>
    
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th class="th">المحاتجين</th>
                            <th class="th">اضافة مبلغ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" @click="this.selectedName = user.name, addMoney = true, selectedUser(user.id, user.role)" v-for="(user, index) in search" :key="index">
                            <td class="td">{{ user.name }}</td>
                            <td class="td" >اضافة مبلغ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
    
        </div>

        <div class="add-money-inputs" v-if="addMoney">
            <h1>{{ selectedName }}</h1>
            <div class="add-money-inputs">
                <label for="amount">المبلغ</label>
                <br>
                <input id="amount" placeholder="المبلغ" v-model="user.amount" type="number">
            </div>
            <br>
            <div class="add-money-inputs">
                <label for="date">تاريخ الاستلام</label>
                <br>
                <input id="date" v-model="user.date" type="date">
            </div>
            <div class="add-money-inputs">
                <label for="from">من</label>
                <br>
                <input id="from" v-model="user.date1" type="date">
            </div>
            <br>
            <div class="add-money-inputs">
                <label for="to">الى</label>
                <br>
                <input id="to" v-model="user.date2" type="date">
            </div>
            <button class="submit"
                v-if="user.date !== '' && user.amount !== ''"
                @click="createUser">Submit</button>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchInput: '',
            role: '',
            selectedName: '',
            addMoney: false,
            users: [],
            user: {
                giver_name: '',
                receiver_name: '',
                receiver_id: '',
                giver_id: '',
                amount: '',
                date: '',
                date1: '',
                date2: ''
            },
        }
    },
    computed: {
        search() {
            return this.users.filter(user => user.name.toLowerCase().match(this.searchInput.toLowerCase()))
        }
    },
    methods: {
        async fetchData() {
            try {
            const education1Data = await axios.get("http://localhost:4000/api/v1/education1");
            const education2Data = await axios.get("http://localhost:4000/api/v1/education2");
            const faqirData = await axios.get("http://localhost:4000/api/v1/faqir");
            const yateemData = await axios.get("http://localhost:4000/api/v1/yateem");
        
            const educations1 = education1Data.data.data.users
            let education1 = []
            for (let i = 0; i < educations1.length; i++) {
              education1.push({ name: educations1[i].first_name, role: educations1[i].role, id: educations1[i].passport_num });
            }
            const educations2 = education2Data.data.data.users
            let education2 = []
            for (let i = 0; i < educations2.length; i++) {
              education2.push({ name: educations2[i].first_name, role: educations2[i].role, id: educations2[i].personal_number });
            }
            const faqirs = faqirData.data.data.users
            let faqir = []
            for (let i = 0; i < faqirs.length; i++) {
              faqir.push({ name: faqirs[i].name, role: faqirs[i].role, id: faqirs[i].personal_number });
            }
            const yateems = yateemData.data.data.users
            let yateem = []
            for (let i = 0; i < yateems.length; i++) {
              yateem.push({ name: yateems[i].name_child, role: yateems[i].role, id: yateems[i].personal_number_child });
            }
        
            this.users = [ ...education1, ...education2, ...faqir, ...yateem]
        
        } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        async createUser() {

            try {
                const response = await axios.post(`http://localhost:4000/api/v1/add_money`, this.user);
                const newUser = response.data.data.users;
                console.log('New user created:', newUser);
                this.fetchData()
    
                this.user = {
                    name: '',
                    receiver_id: null,
                    giver_id: null,
                    amount: '',
                    date: ''
                };
            } catch (error) {
                console.error('Error creating user:', error);
            }

        },
        selectedUser(id, role) {
            this.user.receiver_id = id
            this.user.giver_id = this.$store.state.giverId
            this.role = role
            this.user.receiver_name = this.selectedName
            this.user.giver_name = this.$route.params.name
            console.log(this.user)
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<style scoped>

h1 {
    margin-right: 210px;
    margin-bottom: 50px;
}

h3{
    text-align: center;
}

.table-search {
        display: block;
        float: right;
        margin-top: 0;
    }

    .container {
        margin-top: 100px;
    }
    
    .table {
        margin: 0;
        max-height: 581px;
        overflow-y: auto;
    }

    table {
        width: 500px;
        font-size: 25px;
    }

    .add-money-inputs {
        text-align: right;
        margin-right: 500px;
    }

    th {
        text-align: center;
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
    }

    td, th {
        width: 50%;
    }

    .row {
        cursor: pointer;
    }

    .input {
        font-size: 25px;
        margin: 15px;
        padding: 10px;
    }

    input {
        width: 150px;
    }

    .row:hover {
        background-color: darkgray;
    }

</style>