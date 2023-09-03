<template>
    <div class="container">
        <div class="details">
            <h3 class="h3"><span>{{ giverData.name }}</span> :الاسم</h3>
            <h3 class="h3"><span>{{ giverData.id }}</span> :ID</h3>
            <h3 class="h3"><span>{{ giverData.email }}</span> :Email</h3>
            <h3 class="h3"><span>{{ giverData.phone }}</span> :رقم التلفون</h3>
            <h3 class="h3"><span>{{ giverData.personal_number }}</span>&nbsp;:الرقم&nbsp;الوطني</h3>
        </div>
        <div class="table-search">
    
            <h1>{{ $route.params.name }}</h1>
    
            <input type="date" v-model="startDate"> - 
            <input type="date" v-model="endDate">
    
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="th">الاسم</th>
                            <th class="th">المبلغ</th>
                            <th class="th">التاريخ</th>
                            <th class="th">من</th>
                            <th class="th">الى</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="(user, index) in filteredDates" :key="index">
                            <td class="td">{{ user.receiver_name }}</td>
                            <td class="td">{{ user.amount }}</td>
                            <td class="td">{{ user.date }}</td>
                            <td class="td">{{ user.date1 }}</td>
                            <td class="td">{{ user.date2 }}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h2>المجموع  {{ sum }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            sum: 0,
            startDate: '',
            endDate: '',
            giverData: {
                name: '',
                personal_number: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/add_money/getGiver/${this.$store.state.giverId}`);
                this.users = response.data.data.users;
                this.calculateSum()


                
            const giverData = await axios.get(`http://localhost:4000/api/v1/givers/${this.$store.state.giverId}`)
            
            this.giverData = giverData.data.data.users[0]
            console.log(this.giverData)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        calculateSum(data = this.users) {
            if (Array.isArray(data)) {
                this.sum = data.reduce((acc, row) => acc + row.amount, 0);
            } else {
                this.sum = 0;
            }
        },
    },
    computed: {
        filteredDates() {
            if (!this.startDate || !this.endDate) {

                this.calculateSum()
                return this.users;
            }

            const startDateObj = new Date(this.startDate);
            const endDateObj = new Date(this.endDate);

            const filteredData = this.users.filter(user => {
                const rowDateObj = new Date(user.date);
                return rowDateObj >= startDateObj && rowDateObj <= endDateObj;
            })

            this.calculateSum(filteredData)

            return filteredData;
        },
    },
    created() {
        this.fetchData()
    },
}
</script>

<style scoped>

span {
    font-weight: 100;
}

.details {
    border: 2px black solid;
    padding: 50px;
    height: 200px;
    border-radius: 50px;
    margin: 100px;
}

.h3 {
    text-align: left;
}

.container {
    display: flex;
    justify-content: space-between;
}

.table-search {
        display: block;
        float: right;
        margin-top: 0;
        margin-right: 100px;
    }
    
    .table {
        margin: 0;
        max-height: 200px;
        overflow-y: auto;
    }

    table {
        width: 500px;
        font-size: 25px;
    }

    th {
        text-align: left;
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
        border-radius: 50px;
        padding: 10px;

    }

    .row:hover {
        background-color: darkgray;
    }

</style>