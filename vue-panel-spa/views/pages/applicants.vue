<template>
    <div>
        <div>Applicants</div>

        <div class="row">
            <div class="col-md-12 mb-3">
                <applicant-filter></applicant-filter>
            </div>
        </div>

        <div class="row row-cards">
            <div class="col-md-12">
                <applicant-list url="/panel/applicants"></applicant-list>
            </div>
        </div>

        <applicant-details></applicant-details>
    </div>
</template>

<script>
import ApplicantList from '../components/ApplicantList/component.vue';
import ApplicantDetails from '../components/ApplicantDetails/component.vue';
import ApplicantFilter from '../components/ApplicantFilter/component.vue';

export default {
    components: { ApplicantList, ApplicantDetails, ApplicantFilter }
}
</script>
