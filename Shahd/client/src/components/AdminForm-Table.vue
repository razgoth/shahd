<template>
  <div class="container">
    <h1>التسجيل</h1>
    <hr>
    <h2>{{ serial_num }} :الرقم التسلسلي للمحتاجين</h2>
    <h2>{{ serial_num_giver }} :الرقم التسلسلي للكفيل</h2>
    <div class="form-table">

      <div class="table-delete">
                    <div class="table-search">
            
                        <input class="input" placeholder="Search" v-model="searchInput" type="text">
            
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                      <th class="delete-column">الغاء</th>
                                      <th>النوع</th>
                                      <th>اسم العائلة</th>
                                      <th>الاسم الأول</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="row" v-for="(user, index) in search" :key="index">
                                      <td @click="selectDelete(user.role, user.id)" class="x">x</td>
                                      <td @click="$emit('nextPage', user.id, user.role, user.name)">{{ user.role }}</td>
                                      <td @click="$emit('nextPage', user.id, user.role, user.name)">{{ user.last_name }}</td>
                                      <td @click="$emit('nextPage', user.id, user.role, user.name)">{{ user.name }}</td>
                                    </tr>
                                </tbody>
                              </table>
                            </div>
                    </div>
        
            <!--
            <div class="delete-container">
              <div class="delete">
                <h2>Delete</h2>
                <div class="delete-buttons">
                    <div class="delete-button">
                      <button class="delete-button-one" @click="
                        canDeleteGiver = true,
                        canDeleteEducation1 = false,
                        canDeleteEducation2 = false,
                        canDeleteFaqir = false,
                        canDeleteYateem = false
                        ">
                        كفيل
                      </button>
                    </div>
            
                    <div class="delete-button">
                      <button class="delete-button-one" @click="canDeleteEducation1 = true, canDeleteGiver = false, canDeleteEducation2 = false, canDeleteFaqir = false, canDeleteYateem = false">طالب علم</button>
                    </div>
            
                    <div class="delete-button">
                      <button class="delete-button-one" @click="
                      canDeleteEducation2 = true,
                      canDeleteEducation1 = false,
                      canDeleteGiver = false,
                      canDeleteFaqir = false,
                      canDeleteYateem = false
                      "
                      >طالب ذو احتياجات خاصة</button>
                    </div>
      
                    <div class="delete-button">
                      <button class="delete-button-one" @click="
                        canDeleteYateem = true,
                        canDeleteGiver = false,
                        canDeleteEducation1 = false,
                        canDeleteEducation2 = false,
                        canDeleteFaqir = false
                        "
                        >يتيم</button>
                    </div>
            
                    <div class="delete-button">
                      <button class="delete-button-one" @click="
                        canDeleteFaqir = true,
                        canDeleteGiver = false,
                        canDeleteEducation1 = false,
                        canDeleteEducation2 = false,
                        canDeleteYateem = false
                        "
                        >فقير</button>
                    </div>
                </div>
              </div>
              <div class="delete-inputs">
                <div v-if="canDeleteEducation1">
                  <label for="education1">طالب علم</label>
                  <br>
                  <input
                        id="education1"
                        placeholder="رقم الجواز"
                        type="text"
                        v-model="deleteIdEducation1"
                      />
                      <button class="ok-delete" @click="deleteEducation1">OK</button>
                      <button class="cancel-delete" @click="canDeleteEducation1 = false">Cancel</button>
                </div>
                <div v-if="canDeleteGiver">
                  <label for="giver">كفيل</label>
                  <br>
                  <input
                        id="giver"
                        placeholder="ID"
                        type="number"
                        v-model="deleteIdGiver"
                      />
                      <button class="ok-delete" @click="deleteGiver">OK</button>
                      <button class="cancel-delete" @click="canDeleteGiver = false">Cancel</button>
                </div>
                <div v-if="canDeleteEducation2">
                  <label for="education2">طالب ذو احتياجات خاصة</label>
                  <br>
                  <input
                        id="education2"
                        placeholder="الرقم الوطني"
                        type="text"
                        v-model="deleteIdEducation2"
                      />
                      <button class="ok-delete" @click="deleteEducation2">OK</button>
                      <button class="cancel-delete" @click="canDeleteEducation2 = false">Cancel</button>
                </div>
                <div v-if="canDeleteFaqir">
                  <label for="faqir">فقير</label>
                  <br>
                  <input
                        id="faqir"
                        placeholder="الرقم الوطني"
                        type="text"
                        v-model="deleteIdFaqir"
                      />
                      <button class="ok-delete" @click="deleteFaqir">OK</button>
                      <button class="cancel-delete" @click="canDeleteFaqir = false">Cancel</button>
                </div>
                <div v-if="canDeleteYateem">
                  <label for="yateem">يتيم</label>
                  <br>
                  <input
                        id="yateem"
                        placeholder="الرقم الوطني"
                        type="text"
                        v-model="deleteIdYateem"
                      />
                      <button class="ok-delete" @click="deleteYateem">OK</button>
                      <button class="cancel-delete" @click="canDeleteYateem = false">Cancel</button>
                </div>
              </div>
            </div>
          -->
      </div>
  
      <form>
        <div class="inputs">
          <label for="user_role">النوع</label>
          <select v-model="role" name="user_role" id="user_role" required>
            <option value="giver">كفيل</option>
            <option value="education1">طالب علم</option>
            <option value="education2">طالب ذو احتياجات خاصة</option>
            <option value="yateem">يتيم</option>
            <option value="faqir">فقير</option>
          </select>
        </div>
  
        <div v-if="role === 'giver'">
          <div class="inputs">
            <label for="id">الرقم التسلسلي</label>
            <input type="number" id="id" v-model="giver.id" required />
          </div>
  
          <div class="inputs">
            <label for="name">الاسم</label>
            <input type="text" id="name" v-model="giver.name" required />
          </div>
  
          <div class="inputs">
            <label for="phone">تلفون</label>
            <input type="number" id="phone" v-model="giver.phone" />
          </div>
  
          <div class="inputs">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="giver.email" />
          </div>
  
          <div class="inputs">
            <label for="personal_number">الرقم الوطني</label>
            <input
              type="text"
              id="personal_number"
              v-model="giver.personal_number"
            />
          </div>
        </div>
  
        <div v-else-if="role === 'education1'">
          <div class="inputs">
            <label for="serial_num">الرقم التسلسلي</label>
            <input type="text" id="serial_num" v-model="education1.serial_num" />
          </div>
  
          <div class="inputs">
            <label for="first_name">الاسم الأول</label>
            <input type="text" id="first_name" v-model="education1.first_name" />
          </div>
  
          <div class="inputs">
            <label for="second_name">اسم العائلة</label>
            <input
              type="text"
              id="second_name"
              v-model="education1.second_name"
            />
          </div>
  
          <div class="inputs">
            <label for="address">العنوان</label>
            <input type="text" id="address" v-model="education1.address" />
          </div>
  
          <div class="inputs">
            <label for="telephone">رقم التلفون</label>
            <input type="text" id="telephone" v-model="education1.telephone" />
          </div>
  
          <div class="inputs">
            <label for="nationality">الجنسية</label>
            <input
              type="text"
              id="nationality"
              v-model="education1.nationality"
            />
          </div>
  
          <div class="inputs">
            <label for="uni_name">اسم الجامعة</label>
            <input type="text" id="uni_name" v-model="education1.uni_name" />
          </div>
  
          <div class="inputs">
            <label for="uni_number">الرقم الجامعي</label>
            <input type="text" id="uni_number" v-model="education1.uni_number" />
          </div>
  
          <div class="inputs">
            <label for="uni_level">المستوى الدراسي</label>
            <input type="text" id="uni_level" v-model="education1.uni_level" />
          </div>
  
          <div class="inputs">
            <label for="income_sources">مصادر الدخل</label>
            <input
              type="text"
              id="income_sources"
              v-model="education1.income_sources"
            />
          </div>
  
          <div class="inputs">
            <label for="passport_num">رقم الجواز</label>
            <input
              type="text"
              id="passport_num"
              v-model="education1.passport_num"
            />
          </div>
  
          <div class="inputs">
            <label for="residence_num">رقم الاقامة</label>
            <input
              type="text"
              id="residence_num"
              v-model="education1.residence_num"
            />
          </div>
  
          <div class="inputs">
            <label for="maritalstatus">نوع الحالة</label>
            <br />
            <select
              v-model="education1.maritalstatus"
              name="maritalstatus"
              id="maritalstatus"
            >
              <option value="متزوج">متزوج</option>
              <option value="غير متزوج">غير متزوج</option>
            </select>
          </div>
        </div>
  
        <div v-else-if="role === 'education2'">
          <div class="inputs">
            <label for="serial_num">الرقم التسلسلي</label>
            <input
              type="text"
              id="serial_num"
              v-model="education2.serial_num"
              required
            />
          </div>
  
          <div class="inputs">
            <label for="first_name">الاسم الأول</label>
            <input
              type="text"
              id="first_name"
              v-model="education2.first_name"
              required
            />
          </div>
  
          <div class="inputs">
            <label for="second_name">اسم العائلة</label>
            <input
              type="text"
              id="second_name"
              v-model="education2.second_name"
              required
            />
          </div>
  
          <div class="inputs">
            <label for="personal_number">الرقم الوطني</label>
            <input
              type="text"
              id="personal_number"
              v-model="education2.personal_number"
            />
          </div>
  
          <div class="inputs">
            <label for="address">العنوان</label>
            <input
              type="text"
              id="address"
              v-model="education2.address"
              required
            />
          </div>
  
          <div class="inputs">
            <label for="telephone">رقم التلفون</label>
            <input type="text" id="telephone" v-model="education2.telephone" />
          </div>
  
          <div class="inputs">
            <label for="nationality">الجنسية</label>
            <input
              type="text"
              id="nationality"
              v-model="education2.nationality"
            />
          </div>
  
          <div class="inputs">
            <label for="school_name">اسم المدرسة</label>
            <input
              type="text"
              id="school_name"
              v-model="education2.school_name"
            />
          </div>
  
          <div class="inputs">
            <label for="school_number">الرقم المدرسي</label>
            <input
              type="text"
              id="school_number"
              v-model="education2.school_number"
            />
          </div>
  
          <div class="inputs">
            <label for="school_level">المستوى الدراسي</label>
            <input
              type="text"
              id="school_level"
              v-model="education2.school_level"
            />
          </div>
  
          <div class="inputs">
            <label for="income_sources">مصادر الدخل</label>
            <input
              type="text"
              id="income_sources"
              v-model="education2.income_sources"
            />
          </div>
        </div>
  
        <div v-else-if="role === 'yateem'">
          <div class="inputs">
            <label for="serial_num">الرقم التسلسلي</label>
            <br />
            <input type="text" id="serial_num" v-model="yateem.serial_num">
          </div>
  
          <div class="inputs">
            <label for="name_child">الاسم الرباعي</label>
            <br />
            <input type="text" id="name_child" v-model="yateem.name_child">
          </div>
          <div class="inputs">
            <label for="gender_child">الجنس</label>
            <br />
            <select id="gender_child" v-model="yateem.gender_child">
              <option value="ذكر">ذكر</option>
              <option value="انثى">انثى</option>
            </select>
          </div>
          <div class="inputs">
            <label for="birth_place_child">مكان الولادة</label>
            <br />
            <input type="text" id="birth_place_child" v-model="yateem.birth_place_child">
          </div>
          <div class="inputs">
            <label for="educational_level_child">المستوى الدراسي</label>
            <br />
            <input type="text" id="educational_level_child" v-model="yateem.educational_level_child">
          </div>
          <div class="inputs">
            <label for="address_child">العنوان</label>
            <br />
            <input type="text" id="address_child" v-model="yateem.address_child">
          </div>
          <div class="inputs">
            <label for="application_date_child">تاريخ تقديم الطلب</label>
            <br />
            <input type="date" id="application_date_child" v-model="yateem.application_date_child">
          </div>
          <div class="inputs">
            <label for="birth_date_child">تاريخ الميلاد</label>
            <br />
            <input type="date" id="birth_date_child" v-model="yateem.birth_date_child">
          </div>
          <div class="inputs">
            <label for="school_grade_child">الصف</label>
            <br />
            <input type="text" id="school_grade_child" v-model="yateem.school_grade_child">
          </div>
          <div class="inputs">
            <label for="personal_number_child">الرقم الوطني</label>
            <br />
            <input type="text" id="personal_number_child" v-model="yateem.personal_number_child">
          </div>
          <div class="inputs">
            <label for="name_dad">الاسم الربعاعي للأب</label>
            <br />
            <input type="text" id="name_dad" v-model="yateem.name_dad">
          </div>
          <div class="inputs">
            <label for="early_work_dad">العمل قبل الوفاة</label>
            <br />
            <input type="text" id="early_work_dad" v-model="yateem.early_work_dad">
          </div>
          <div class="inputs">
            <label for="birth_date_dad">تاريخ الولادة</label>
            <br />
            <input type="date" id="birth_date_dad" v-model="yateem.birth_date_dad">
          </div>
          <div class="inputs">
            <label for="death_reason_dad">سبب الوفاة</label>
            <br />
            <input type="text" id="death_reason_dad" v-model="yateem.death_reason_dad">
          </div>
          <div class="inputs">
            <label for="death_date_dad">تاريخ الوفاة</label>
            <br />
            <input type="date" id="death_date_dad" v-model="yateem.death_date_dad">
          </div>
          <div class="inputs">
            <label for="death_location_dad">مكان الوفاة</label>
            <br />
            <input type="text" id="death_location_dad" v-model="yateem.death_location_dad">
          </div>
          <div class="inputs">
            <label for="personal_number_dad">الرقم الوطني</label>
            <br />
            <input type="text" id="personal_number_dad" v-model="yateem.personal_number_dad">
          </div>
          <div class="inputs">
            <label for="name_mom">الاسم الرباعي للأم</label>
            <br />
            <input type="text" id="name_mom" v-model="yateem.name_mom">
          </div>
          <div class="inputs">
            <label for="current_job_mom">العمل الحالي</label>
            <br />
            <input type="text" id="current_job_mom" v-model="yateem.current_job_mom">
          </div>
          <div class="inputs">
            <label for="birth_date_mom">تاريخ الولادة</label>
            <br />
            <input type="date" id="birth_date_mom" v-model="yateem.birth_date_mom">
          </div>
          <div class="inputs">
            <label for="maritalstatus">الحالة الاجتماعية</label>
            <br />
            <select
              v-model="yateem.maritalstatus"
              id="maritalstatus"
            >
              <option value="متزوج">متزوج</option>
              <option value="غير متزوج">غير متزوج</option>
            </select>        
          </div>
          <div class="inputs">
            <label for="personal_number_mom">الرقم الوطني</label>
            <br />
            <input type="text" id="personal_number_mom" v-model="yateem.personal_number_mom">
          </div>
          <div class="inputs">
            <label for="name_guardian">الاسم الرباعي لولي الأمر</label>
            <br />
            <input type="text" id="name_guardian" v-model="yateem.name_guardian">
          </div>
          <div class="inputs">
            <label for="relation_guardian">صلة القرابة</label>
            <br />
            <input type="text" id="relation_guardian" v-model="yateem.relation_guardian">
          </div>
          <div class="inputs">
            <label for="job_guardian">المهنة</label>
            <br />
            <input type="text" id="job_guardian" v-model="yateem.job_guardian">
          </div>
          <div class="inputs">
            <label for="number_of_minors">عدد من يعيلهم</label>
            <br />
            <input type="text" id="number_of_minors" v-model="yateem.number_of_minors">
          </div>
          <div class="inputs">
            <label for="info">معلومات أخرى</label>
            <br />
            <textarea id="info" cols="30" rows="8" v-model="yateem.info"></textarea>
          </div>
        </div>
  
        <div v-else-if="role === 'faqir'">
                  <div class="inputs">
                      <label for="serial_num">الرقم التسلسلي</label>
                      <input type="text" id="serial_num" v-model="faqir.serial_num" required>
                  </div>
  
                  <div class="inputs">
                      <label for="name">الاسم الرباعي</label>
                      <input type="text" id="name" v-model="faqir.name" required>
                  </div>
      
                  <div class="inputs">
                      <label for="personal_number">الرقم الوطني</label>
                      <input type="text" id="personal_number" v-model="faqir.personal_number" required>
                  </div>
                  
                  <div class="inputs">
                      <label for="address">العنوان</label>
                      <input type="text" id="address" v-model="faqir.address">
                  </div>
      
                  <div class="inputs">
                      <label for="mother_name">اسم الأم</label>
                      <input type="text" id="mother_name" v-model="faqir.mother_name" required>
                  </div>
                  
                  <div class="inputs">
                      <label for="mother_personal_number">الرقم الوطني للأم</label>
                      <input type="text" id="mother_personal_number" v-model="faqir.mother_personal_number">
                  </div>
                  
                  <div class="inputs">
                      <label for="father_name">اسم الأب</label>
                      <input type="text" id="father_name" v-model="faqir.father_name">
                  </div>
  
                  <div class="inputs">
                      <label for="father_personal_number">الرقم الوطني للأب</label>
                      <input type="text" id="father_personal_number" v-model="faqir.father_personal_number">
                  </div>
                  
                  <div class="inputs">
                      <label for="children_number">عدد الأطفال</label>
                      <input type="text" id="children_number" v-model="faqir.children_number">
                  </div>
  
                  <div>
                    <div>
                      <div class="inputs">
                        <label for="user_address">اسم الطفل</label>
                        <input type="text" id="user_address" v-model="children.child_name">
                      </div>
                      <div class="inputs">
                        <label for="user_address">تاريخ الولادة</label>
                        <br>
                        <input type="date" id="user_address" v-model="children.child_birth_date" @change="calculateAge">
                        <h2>{{ age }}</h2>
                      </div>
                      <div class="inputs">
                        <label for="user_address">أول 3 أرقام من الرقم الوطني</label>
                        <input type="text" id="user_address" v-model="children.child_3_num_personal_number">
                      </div>
                      <button @click.prevent="selectId">More</button>
                    </div>
                  </div>
        </div>
  
        <button @click.prevent="createUser" v-if="role" type="button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      role: "",
      serial_num: null,
      serial_num_giver: null,
      users: [],
      searchInput: "",
      age: "",
      
      giver: {
        id: null,
        name: null,
        phone: null,
        email: null,
        personal_number: null,
        role: null
      },
      deleteIdGiver: '',
      canDeleteGiver: false,
      updateUser: {},
      updateId: "",
      canUpdate: false,

      education1: {
        serial_num: null,
        first_name: null,
        second_name: null,
        address: null,
        telephone: null,
        nationality: null,
        uni_name: null,
        uni_number: null,
        uni_level: null,
        passport_num: null,
        residence_num: null,
        income_sources: null,
        maritalstatus: null,
        role: null
      },
      deleteIdEducation1: "",
      canDeleteEducation1: false,

      education2: {
        serial_num: null,
        first_name: null,
        second_name: null,
        address: null,
        telephone: null,
        personal_number: null,
        nationality: null,
        school_name: null,
        school_number: null,
        school_level: null,
        income_sources: null,
        role: null
      },
      deleteIdEducation2: "",
      canDeleteEducation2: false,

      yateem: {
        serial_num: null,
        name_child: null,
        gender_child: null,
        birth_place_child: null,
        educational_level_child: null,
        address_child: null,
        application_date_child: null,
        birth_date_child: null,
        school_grade_child: null,
        personal_number_child: null,

        name_dad: null,
        early_work_dad: null,
        birth_date_dad: null,
        death_reason_dad: null,
        death_date_dad: null,
        death_location_dad: null,
        personal_number_dad: null,

        name_mom: null,
        current_job_mom: null,
        birth_date_mom: null,
        maritalstatus: null,
        personal_number_mom: null,

        name_guardian: null,
        relation_guardian: null,
        job_guardian: null,
        number_of_minors: null,

        info: null,
      },
      deleteIdYateem: '',
      canDeleteYateem: false,

      faqir: {
        serial_num: null,
        name: null,
        personal_number: null,
        address: null,
        mother_name: null,
        mother_personal_number: null,
        father_name: null,
        father_personal_number: null,
        children_number: null,
        role: null
      },
      children: {
        parent_id: null,
        child_name: '',
        child_birth_date: '',
        child_3_num_personal_number: null
      },
      deleteIdFaqir: "",
      canDeleteFaqir: false,
    };
  },
  methods: {
    async createUser() {
      let url;
      let formData;
      let serial_num;
      let what_serial;
      if (this.role === "giver") {
        url = "http://localhost:4000/api/v1/givers";
        this.giver.role = 'كفيل'
        formData = this.giver;
        serial_num = {serial_num: this.giver.id}
        what_serial = 'serial_num_giver'
      } else if (this.role === "education1") {
        url = "http://localhost:4000/api/v1/education1";
        this.education1.role = 'طالب علم'
        formData = this.education1;
        serial_num = {serial_num: this.education1.serial_num}
        what_serial = 'serial_num'
      } else if (this.role === "education2") {
        url = "http://localhost:4000/api/v1/education2";
        this.education2.role = 'طالب ذو احتياجات خاصة'
        formData = this.education2;
        serial_num = {serial_num: this.education2.serial_num}
        what_serial = 'serial_num'
      } else if (this.role === "faqir") {
        url = "http://localhost:4000/api/v1/faqir";
        this.faqir.role = 'فقير'
        formData = this.faqir;
        serial_num = {serial_num: this.faqir.serial_num}
        what_serial = 'serial_num'
        this.selectId()
      } else if (this.role === "yateem") {
        url = "http://localhost:4000/api/v1/yateem";
        this.yateem.role = 'يتيم'
        formData = this.yateem;
        serial_num = {serial_num: this.yateem.serial_num}
        what_serial = 'serial_num'
      }

      try {
        console.log('creating')
        const response = await axios.post(url, formData);
        console.log('creating2')
        console.log(what_serial)
        const serial_number = await axios.patch(`http://localhost:4000/api/v1/${what_serial}`, serial_num)
        console.log('creating3')
        const serial = serial_number.data.serial_num.serial_num
        const newUser = response.data.data.users;
        console.log(serial)

        this.giver = {
          id: null,
          name: null,
          phone: null,
          email: null,
          personal_number: null,
          role: null
        },

        this.education1 = {
          serial_num: null,
          first_name: null,
          second_name: null,
          address: null,
          telephone: null,
          nationality: null,
          uni_name: null,
          uni_number: null,
          uni_level: null,
          passport_num: null,
          residence_num: null,
          income_sources: null,
          maritalstatus: null,
          role: null
        },

        this.education2 = {
          serial_num: null,
          first_name: null,
          second_name: null,
          address: null,
          telephone: null,
          personal_number: null,
          nationality: null,
          school_name: null,
          school_number: null,
          school_level: null,
          income_sources: null,
          role: null
        },

        this.yateem = {
          serial_num: null,
          name_child: null,
          gender_child: null,
          birth_place_child: null,
          educational_level_child: null,
          address_child: null,
          application_date_child: null,
          birth_date_child: null,
          school_grade_child: null,
          personal_number_child: null,

          name_dad: null,
          early_work_dad: null,
          birth_date_dad: null,
          death_reason_dad: null,
          death_date_dad: null,
          death_location_dad: null,
          personal_number_dad: null,

          name_mom: null,
          current_job_mom: null,
          birth_date_mom: null,
          maritalstatus: null,
          personal_number_mom: null,

          name_guardian: null,
          relation_guardian: null,
          job_guardian: null,
          number_of_minors: null,

          info: null,
        },

        this.faqir = {
          serial_num: null,
          name: null,
          personal_number: null,
          address: null,
          mother_name: null,
          mother_personal_number: null,
          father_name: null,
          father_personal_number: null,
          children_number: null,
          role: null
        },

        console.log("New user created:", newUser);
        this.fetchData();
        this.getSerialNum();

      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
    async deleteGiver() {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/givers/${this.deleteIdGiver}`
        );
        console.log(response.data);
        this.fetchData();
        this.canDeleteGiver = false
      } catch (err) {
        console.log(err);
      }
    },
    async deleteEducation1() {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/education1/${this.deleteIdEducation1}`
        );
        console.log(response.data);
        this.fetchData();
        this.canDeleteEducation1 = false
      } catch (err) {
        console.log(err);
      }
    },
    async deleteEducation2() {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/education2/${this.deleteIdEducation2}`
        );
        console.log(response.data);
        this.fetchData();
        this.canDeleteEducation2 = false
      } catch (err) {
        console.log(err);
      }
    },
    async deleteYateem() {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/yateem/${this.deleteIdYateem}`
        );
        console.log(response.data);
        this.fetchData();
        this.canDeleteYateem = false
      } catch (err) {
        console.log(err);
      }
    },
    async deleteFaqir() {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/faqir/${this.deleteIdFaqir}`
        );
        console.log(response.data);
        this.fetchData();
        this.canDeleteFaqir = false
      } catch (err) {
        console.log(err);
      }
    },
    fieldChanged(field, value) {
      this.updateUser[field] = value;
    },
    async updateGiver() {
      try {
        console.log(this.updateUser);
        console.log(this.updateId);

        const userId = this.updateId;
        const response = await axios.patch(
          `http://localhost:4000/api/v1/givers/${userId}`,
          this.updateUser
        );

        //if (response.status === 200) {
        console.log("User updated successfully");
        console.log(response.data.data.users);
        // Handle successful update here.
        this.canUpdate = false;
        //}
      } catch (error) {
        console.error("Error updating user: ", error);
        // Handle error here.
      }
    },
    async fetchData() {
      try {
        const giversData = await axios.get("http://localhost:4000/api/v1/givers");
        const education1Data = await axios.get("http://localhost:4000/api/v1/education1");
        const education2Data = await axios.get("http://localhost:4000/api/v1/education2");
        const faqirData = await axios.get("http://localhost:4000/api/v1/faqir");
        const yateemData = await axios.get("http://localhost:4000/api/v1/yateem");
        
        const givers = giversData.data.data.users
        let giver = []
        for (let i = 0; i < givers.length; i++) {
          giver.push({ name: givers[i].name, role: givers[i].role, id: givers[i].id });
        }
        
        const educations1 = education1Data.data.data.users
        let education1 = []
        for (let i = 0; i < educations1.length; i++) {
          education1.push({ name: educations1[i].first_name, role: educations1[i].role, id: educations1[i].passport_num, last_name: educations1[i].second_name });
        }

        const educations2 = education2Data.data.data.users
        let education2 = []
        for (let i = 0; i < educations2.length; i++) {
          education2.push({ name: educations2[i].first_name, role: educations2[i].role, id: educations2[i].personal_number, last_name: educations2[i].second_name });
        }

        const faqirs = faqirData.data.data.users
        let faqir = []
        for (let i = 0; i < faqirs.length; i++) {
          faqir.push({ name: faqirs[i].name, role: faqirs[i].role, id: faqirs[i].personal_number, last_name: faqirs[i].second_name });
        }

        const yateems = yateemData.data.data.users
        let yateem = []
        for (let i = 0; i < yateems.length; i++) {
          yateem.push({ name: yateems[i].name_child, role: yateems[i].role, id: yateems[i].personal_number_child, last_name: yateems[i].second_name_child });
        }
        
      
        
        this.users = [...giver, ...education1, ...education2, ...faqir, ...yateem]
  
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async getSerialNum() {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/serial_num");
        const giver = await axios.get("http://localhost:4000/api/v1/serial_num_giver");
        const data = response.data.serial_num
        const giverData = giver.data.serial_num
        console.log(data.serial_num)
        console.log(giver)

        this.serial_num = data.serial_num
        this.serial_num_giver = giverData.serial_num
        console.log(this.serial_num)
        console.log(response)
  
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    calculateAge() {
      const birthdate = new Date(this.children.child_birth_date);
      const today = new Date();

      let ageYears = today.getFullYear() - birthdate.getFullYear();
      let ageMonths = today.getMonth() - birthdate.getMonth();
      let ageDays = today.getDate() - birthdate.getDate();

      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }

      if (ageDays < 0) {
        const daysInLastMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        ).getDate();
        ageMonths--;
        ageDays += daysInLastMonth;
      }

      this.age = `${ageYears} years, ${ageMonths} months, ${ageDays} days`;
    },
    async createChild() {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/children', this.children);
        const newUser = response.data.data.users;
        console.log("New user created:", newUser);
        this.fetchData();

        this.children = {
          parent_id: null,
          child_name: '',
          child_birth_date: '',
          child_3_num_personal_number: null
        }

      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
    selectId() {
      this.children.parent_id = this.faqir.personal_number
      console.log(this.children.parent_id)
      this.createChild()
    },
    selectDelete(role, id) {
      switch(role) {
        case 'كفيل':
          this.deleteIdGiver = id
          this.deleteGiver()
          break
        case 'طالب علم':
          this.deleteIdEducation1 = id
          this.deleteEducation1()
          break
        case 'طالب ذو احتياجات خاصة':
          this.deleteIdEducation2 = id
          this.deleteEducation2()
          break
        case 'فقير':
          this.deleteIdFaqir = id
          this.deleteFaqir()
          break
        case 'يتيم':
          this.deleteIdYateem = id
          this.deleteYateem()
          break
      }
    },
  },
  computed: {
    search() {
      return this.users.filter(user => user.name.toLowerCase().match(this.searchInput.toLowerCase()) || user.id.toLowerCase().match(this.searchInput.toLowerCase()) || user.role.toLowerCase().match(this.searchInput.toLowerCase()))
    }
  },
  async created() {
    this.fetchData();
    this.getSerialNum();
  },
};
</script>

<style>
.form-table {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}

textarea {
  font-size: 20px;
}

form {
  display: flex;
  flex-wrap: wrap;
  max-height: 0;
  max-width: 0;
  margin-right: 500px;
}

.inputs {
  margin: 20px;
  text-align: right;
}

button {
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  width: auto;
  height: auto;
}

input,
select {
  padding: 10px;
  font-size: 20px;
  margin-top: 10px;
}


h1, h2 {
  text-align: center;
}




.delete {
  margin-top: 600px;
  border: 1px black solid;
  padding: 40px;
  width: 400px;
  height: 300px;
}

.delete-buttons {
  display: flex;
  flex-wrap: wrap;
}

.delete-button {
  margin: 0 30px;
}

.delete-button-one {
  background-color:red;
}

.x{
  text-align: center;
  color: red;
}

.delete-column {
  color: red;
}



.delete-button-one:hover, .x:hover {
  background-color: #bc1616;
  color: white;
}

.cancel-delete {
  background-color: #999;
}

.cancel-delete:hover {
  background-color: #777;
}

.ok-delete {
  background-color: green;
}

.ok-delete:hover {
  background-color: darkgreen;
}

.table-delete {
  margin-left: 100px;
}

label {
  font-size: 25px;
}

.delete-inputs {
  margin-top: 20px;
}






.table-search {
  display: block;
  float: right;
  margin-top: 0;
}

.table {
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
}

table {
  width: 500px;
  font-size: 25px;
}

td {
  text-align: right;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}

td,
th {
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
