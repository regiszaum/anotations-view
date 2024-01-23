<template>
    <div class="table-view">
        <div class="d-flex align-items-center h-100">
            <div class="container table-container">
                <div class="d-flex justify-content-center w-100">
                    <div class="w-100">
                        <h1 class="text-center my-3 table-title fw-bold">Anotações criadas</h1>
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th v-for="column in columns" :key="column.field">{{ column.label }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <slot></slot>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
        
    <script>
    export default {
        name: 'TableAnotation',
        props: {
            columns: {
                type: Array,
                required: true,
            },
        },
    };
    </script>
    
<style scoped>
.table-responsive {
    border-radius: 10px;
    border: 3px solid darkgray;
}

table > thead > tr > th:last-child {
    text-align: center;
}

.table-title {
    color: #535257;
}
</style>