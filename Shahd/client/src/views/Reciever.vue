<template>
    <div class="container">
        <ReceiverDetails />
        <div class="table">
            <div>
                <input type="date" v-model="startDate"> - 
                <input type="date" v-model="endDate">
            </div>
            <table>
                <thead>
                    <tr>
                        <th class="th">الرقم التسلسلي</th>
                        <th class="th">الكفيل</th>
                        <th class="th">المبلغ</th>
                        <th class="th">تاريخ الاستلام</th>
                        <th class="th">من</th>
                        <th class="th">الى</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="row" v-for="(user, index) in filteredDates" :key="index">
                        <td>{{ user.giver_id }}</td>
                        <td>{{ user.giver_name }}</td>
                        <td>{{ user.amount }}</td>
                        <td>{{ user.date }}</td>
                        <td>{{ user.date1 }}</td>
                        <td>{{ user.date2 }}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h2>المجموع  <span>{{ sum }}</span></h2>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import ReceiverDetails from '../components/ReceiverDetails.vue';

export default {
    components: {
        ReceiverDetails
    },  
    data() {
        return {
            users: [],
            sum: 0,
            startDate: '',
            endDate: ''
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/add_money/getReceiver/${this.$store.state.receiverId}`);
                this.users = response.data.data.users;

                //this.getSum()

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
    watch: {
        startDate: 'calculateSum',
        endDate: 'calculateSum',
    },
    created() {
        this.fetchData()
    }
}
</script>

<style scoped>

    .container {
        margin: 50px;
        display: flex;
    }
    .table-search {
        display: block;
        float: right;
        margin-top: 0;
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

    .row:hover {
        background-color: darkgray;
    }
</style>