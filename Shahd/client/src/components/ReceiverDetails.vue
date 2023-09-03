<template>
    <div class="container">
        <div class="details" v-if="$store.state.role === 'طالب ذو احتياجات خاصة'">
            <div dir="rtl" v-for="(user, index) in user" :key="index">
                <h2 class="user-details"><span dir="rtl">{{ user.first_name }}</span>الاسم الأول</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.second_name }}</span>اسم العائلة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.address }}</span>العنوان</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.telephone }}</span>رقم التلفون</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.personal_number }}</span>الرقم الوطني</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.nationality }}</span>الجنسية</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.school_name }}</span>اسم المدرسة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.school_number }}</span>الرقم المدرسي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.school_level }}</span>المستوى الدراسي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.income_sources }}</span>مصادر الدخل</h2>
            </div>
        </div>
        <div class="details" v-if="$store.state.role === 'طالب علم'">
            <div dir="rtl" v-for="(user, index) in user" :key="index">
                <h2 class="user-details"><span dir="rtl">{{ user.first_name }}</span>الاسم الأول</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.second_name }}</span>اسم العائلة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.address }}</span>العنوان</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.telephone }}</span>رقم التلفون</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.nationality }}</span>الجنسية</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.uni_name }}</span>اسم الجامعة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.uni_number }}</span>الرقم الجامعي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.uni_level }}</span>المستوى الدراسي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.passport_num }}</span>رقم الجواز</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.residence_num }}</span>رقم الاقامة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.income_sources }}</span>مصادر الدخل</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.maritalstatus }}</span>نوع الحالة</h2>
            </div>
        </div>
        <div class="details" v-if="$store.state.role === 'فقير'">
            <div dir="rtl" v-for="(user, index) in user" :key="index">
                <h2 class="user-details"><span dir="rtl">{{ user.name }}</span>الاسم الرباعي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.personal_number }}</span>الرقم الوطني</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.address }}</span>العنوان</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.mother_name }}</span>اسم الأم</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.mother_personal_number }}</span>الرقم الوطني للأم</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.father_name }}</span>اسم الأب</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.father_personal_number }}</span>الرقم الوطني للأب</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.children_number }}</span>عدد الأطفال</h2>
            </div>
            <div dir="rtl" v-for="(child, index) in children" :key="index">
                <h2>الطفل رقم {{ index + 1 }}</h2>
                <h3 class="user-details"><span dir="rtl">{{ child.child_name }}</span>اسم الطفل</h3>
                <h3 class="user-details"><span dir="rtl">{{ child.child_birth_date }}</span>تاريخ الولادة</h3>
                <h3 class="user-details"><span dir="rtl">{{ child.child_3_num_personal_number }}</span>أول 3 أرقام من الرقم الوطني</h3>
            </div>
        </div>
        <div class="details" v-if="$store.state.role === 'يتيم'">
            <div dir="rtl" v-for="(user, index) in user" :key="index">
                <h2 class="user-details"><span dir="rtl">{{ user.name_child }}</span>: الاسم الرباعي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.gender_child }}</span>الجنس</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.birth_place_child }}</span>مكان الولادة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.educational_level_child }}</span>المستوى الدراسي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.address_child }}</span>العنوان</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.application_date_child }}</span>تاريخ تقديم الطلب</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.birth_date_child }}</span>تاريخ الميلاد</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.school_grade_child }}</span>الصف</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.personal_number_child }}</span>الرقم الوطني</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.name_dad }}</span>الاسم الربعاعي للأب</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.early_work_dad }}</span>العمل قبل الوفاة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.death_reason_dad }}</span>تاريخ الولادة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.birth_date_dad }}</span>سبب الوفاة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.death_date_dad }}</span>تاريخ الوفاة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.death_location_dad }}</span>مكان الوفاة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.personal_number_dad }}</span>الرقم الوطني</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.name_mom }}</span>الاسم الرباعي للأم</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.current_job_mom }}</span>العمل الحالي</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.birth_date_mom }}</span>تاريخ الولادة</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.maritalstatus }}</span>الحالة الاجتماعية</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.personal_number_mom }}</span>الرقم الوطني</h2>
                <h2 class="user-details"><span dir="rtl">{{ user.name_guardian }}</span>الاسم الرباعي لولي الأمر</h2>
                <h2><span class="user-details" dir="rtl">{{ user.relation_guardian }}</span>صلة القرابة</h2>
                <h2><span class="user-details" dir="rtl">{{ user.job_guardian }}</span>المهنة</h2>
                <h2><span class="user-details" dir="rtl">{{ user.number_of_minors }}</span>عدد من يعيلهم</h2>
                <h2><span class="user-details" dir="rtl">{{ user.info }}</span>معلومات أخرى</h2>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: [],
            children: []
        }
    },
    methods: {
        async fetchData() {

            let url
            if (this.$store.state.role === 'طالب علم') {
                url = 'education1'
            }
            else if (this.$store.state.role === 'طالب ذو احتياجات خاصة') {
                url = 'education2'
            }
            else if (this.$store.state.role === 'فقير') {
                url = 'faqir'
            }
            else if (this.$store.state.role === 'يتيم') {
                url = 'yateem'
            }

            try {

                const response = await axios.get(`http://localhost:4000/api/v1/${url}/${this.$store.state.receiverId}`)
                
                if (this.$store.state.role === 'فقير') {
                    const children = await axios.get(`http://localhost:4000/api/v1/children/${this.$store.state.receiverId}`)
                    this.children = children.data.data.users
                }

                this.user = response.data.data.users

            } catch (err) {
                console.error('Could not fetch data', err)
            }
        }
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
    height: auto;
    width: 500px;
    border-radius: 50px;
}

.container {
    margin-left: 100px;
}



.user-details {
    display: flex;
    justify-content: space-between;
    direction: ltr;
}
[dir="rtl"] {
    flex-direction: row-reverse;
    direction: rtl;
}

</style>